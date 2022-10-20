import { IAddress, IUpdateAddres } from "./adresses";

export interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  avatarColor: string;
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
  avatarColor: string;
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

export interface IUpdateUser {
  name?: string;
  email?: string;
  cpf?: string;
  phoneNumber?: string;
  birthDate?: string;
  description?: string;
}

export type UserContextType = {
  userLogged: IUser | undefined;
  addressUserLogged: IAddress | undefined;
  signupUser: (data: ICreateUser) => Promise<void>;
  loginUser: (data: ILoginUser) => Promise<void>;
  updateUser: (data: IUpdateUser, token: string) => Promise<void>;
  updateAdress: (data: IUpdateAddres, token: string) => Promise<void>;
};
