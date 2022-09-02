import { IUser } from "./users";

export interface IAdversiment {
  id: number;
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  coverImage: string;
  typeAd: string;
  vehicleType: string;
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
  coverImage: string;
  typeAd: string;
  vehicleType: string;
  images: [];
}

export type AdvertisementContextType = {
  advertisements: IAdversiment[];
  listAllAdvertisements: (token: string) => Promise<void>;
  listAdvertisementsPerUser: (token: string, userId: string) => Promise<void>;
  showAdvertisement: (
    token: string,
    advertisementId: string
  ) => Promise<IAdversiment>;
  createAdvertisement: (
    token: string,
    dataAdvertisement: ICreateAdvertisement
  ) => Promise<void>;
};
