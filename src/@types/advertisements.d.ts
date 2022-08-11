import { IUser } from "./user";

export interface IAdversiment {
  id: number;
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  cover_image: string;
  type_ad: string;
  vehicle_type: string;
  created_at: string;
  updated_at: string;
  user: IUser;
  images: [];
}

interface ICreateAdvertisement {
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  cover_image: string;
  type_ad: string;
  vehicle_type: string;
  images: [];
}

export type AdvertisementContextType = {
  advertisements: IAdversiment[];
  listAllAdvertisements: (token: string) => void;
  listAdvertisementsPerUser: (token: string, userId: string) => void;
  showAdvertisement: (
    token: string,
    advertisementId: string
  ) => Promise<IAdversiment>;
  createAdvertisement: (
    token: string,
    dataAdvertisement: ICreateAdvertisement
  ) => void;
};
