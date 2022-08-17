export interface IAddress {
  id: string;
  cep: string;
  state: string;
  city: string;
  number: number;
  complement?: string;
}
