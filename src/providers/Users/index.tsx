import { AxiosError } from "axios";
import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { toast } from "react-toastify";
import { ModalContextType } from "../../@types/modals";
import {
  ICreateUser,
  ILoginUser,
  ILoginUserResponse,
  IUser,
  UserContextType,
} from "../../@types/users";
import api from "../../services/api";
import {
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
  const [user, setUser] = useState<IUser | {}>(
    isAuthenticated() ? getUserLocalStorage() : {}
  );
  const { openModalSucess } = useContext(ModalContext) as ModalContextType;

  const loginUser = async (data: ILoginUser) => {
    await api
      .post<ILoginUserResponse>("/users/login", data)
      .then(({ data: res }) => {
        setUser(res.user);
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

  return (
    <UserContext.Provider value={{ user, loginUser, signupUser }}>
      {children}
    </UserContext.Provider>
  );
};
