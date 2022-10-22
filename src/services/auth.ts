import { ILoginUserResponse, IUser } from "../@types/users";

export const TOKEN_KEY = "@motorsshop:token";
export const USER_KEY = "@motorsshop:user";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getTokenLocalStorage = (): string =>
  JSON.parse(localStorage.getItem(TOKEN_KEY) || "");
export const getUserLocalStorage = (): IUser =>
  JSON.parse(localStorage.getItem(USER_KEY) || "");
export const login = (data: ILoginUserResponse) => {
  localStorage.clear();
  localStorage.setItem(TOKEN_KEY, JSON.stringify(data.token));
  localStorage.setItem(USER_KEY, JSON.stringify(data.user));
};
