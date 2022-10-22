import { IAddress, IUpdateAddres } from "@/types/adresses";
import { AxiosError } from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { toast } from "react-toastify";
import { ModalContextType } from "../../@types/modals";
import {
  ICreateUser,
  ILoginUser,
  ILoginUserResponse,
  IUpdateUser,
  IUser,
  UserContextType,
} from "../../@types/users";
import api from "../../services/api";
import {
  getTokenLocalStorage,
  getUserLocalStorage,
  isAuthenticated,
  login,
} from "../../services/auth";
import { ModalContext } from "../Modals";

interface IProps {
  children?: React.ReactNode;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<IProps> = ({ children }) => {
  const history = useHistory();
  const [userLogged, setUserLogged] = useState<IUser | undefined>();
  const [addressUserLogged, setAddressUserLogged] = useState<
    IAddress | undefined
  >();

  useEffect(() => {
    if (isAuthenticated()) {
      setUserLogged(getUserLocalStorage());
      setAddressUserLogged(getUserLocalStorage().address);
    }
  }, []);

  const { openModalSucess } = useContext(ModalContext) as ModalContextType;

  const loginUser = async (data: ILoginUser) => {
    await api
      .post<ILoginUserResponse>("/users/login", data)
      .then(({ data: res }) => {
        setUserLogged(res.user);
        login(res);
        return history.push("/profile");
      })
      .catch(({ response }: AxiosError) => {
        if (response?.status == 400) {
          return toast.error("Email e/ou senha inválidos!");
        }
        return toast.error("Ops! Algo deu errado");
      });
  };

  const signupUser = async (data: ICreateUser) => {
    await api
      .post<IUser>("/users/register", data)
      .then(() => {
        animateScroll.scrollToTop();
        openModalSucess();
      })
      .catch(({ response }: AxiosError) => {
        if (response?.status == 409) {
          return toast.error("Email e/ou CPF já registrado");
        }

        return toast.error("Ops! Algo deu errado");
      });
    return;
  };

  const updateUser = async (data: IUpdateUser, token: string) => {
    await api
      .patch<IUser>("/users", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        login({ user: data, token });
        setUserLogged(data);
        return toast.success("Dados alterados com sucesso!");
      })
      .catch(() => toast.error("Ops, algo deu errado!"));
  };

  const updateAdress = async (data: IUpdateAddres, token: string) => {
    api
      .patch<IUser>("/users/address", data, {
        headers: {
          Authorization: `Bearer ${getTokenLocalStorage()}`,
        },
      })
      .then(({ data }) => {
        login({ user: data, token });
        setAddressUserLogged(data.address);
        return toast.success("Dados alterados com sucesso!");
      })
      .catch(() => toast.error("Ops, algo deu errado!"));
  };

  const logout = () => {
    localStorage.clear();
    setUserLogged(undefined);
  };

  return (
    <UserContext.Provider
      value={{
        userLogged,
        addressUserLogged,
        loginUser,
        signupUser,
        updateUser,
        updateAdress,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
