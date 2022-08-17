import { IAddress } from "./adresses";

export interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  birth_date: string;
  description: string;
  is_seller: boolean;
  address: IAddress;
  created_at: string;
  updated_at: string;
}

export interface ICreateUser {
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  birth_date: string;
  description: string;
  is_seller: boolean;
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
  loginUser: (data: ILoginUser) => Promise<ILoginUserResponse>;
};
