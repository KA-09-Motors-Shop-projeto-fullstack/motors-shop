import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
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

interface IProps {
  children?: React.ReactNode;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<IProps> = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState<IUser | {}>(
    isAuthenticated() ? getUserLocalStorage() : {}
  );

  const loginUser = async (data: ILoginUser) => {
    await api
      .post<ILoginUserResponse>("/users/login", data)
      .then(({ data: res }) => {
        setUser(res.user);
        login(res);
        return history.push("/profile");
      });
  };

  const signupUser = async (data: ICreateUser) => {
    const { data: res } = await api.post<IUser>("/users/register", data);
    return;
  };

  return (
    <UserContext.Provider value={{ user, loginUser, signupUser }}>
      {children}
    </UserContext.Provider>
  );
};
