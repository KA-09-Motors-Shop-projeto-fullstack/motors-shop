import React, { createContext, useState } from "react";
import { ModalContextType } from "../../@types/modals";
import {
  ICreateUser,
  ILoginUser,
  ILoginUserResponse,
  IUser,
  UserContextType,
} from "../../@types/users";
import api from "../../services/api";

interface IProps {
  children?: React.ReactNode;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>();

  const loginUser = async (data: ILoginUser) => {
    const { data: res } = await api.post<ILoginUserResponse>(
      "/users/login",
      data
    );

    return res;
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
