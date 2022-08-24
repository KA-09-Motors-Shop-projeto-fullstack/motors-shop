import { IAddress } from "./adresses";

export interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  birthDate: string;
  description: string;
  isSeller: boolean;
  address: IAddress;
  created_at: string;
  updated_at: string;
}

export interface ICreateUser {
  name: string;
  email: string;
  cpf: string;
  phoneNumber: string;
  birthDate: string;
  description: string;
  isSeller: boolean;
  cep: string;
  state: string;
  city: string;
  number: number;
  complement?: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface ILoginUserResponse {
  token: string;
  user: IUser;
}

export type UserContextType = {
  user: IUser | {};
  signupUser: (data: ICreateUser) => Promise<void>;
  loginUser: (data: ILoginUser) => Promise<void>;
};
