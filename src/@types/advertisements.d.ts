import { IUser } from "./users";

export interface IAdvertisement {
  id: string;
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
  advertisements: IAdvertisement[];
  listAllAdvertisements: () => Promise<void>;
  listAdvertisementsPerUser: (token: string, userId: string) => Promise<void>;
  showAdvertisement: (
    token: string,
    advertisementId: string
  ) => Promise<IAdvertisement>;
  createAdvertisement: (
    token: string,
    dataAdvertisement: ICreateAdvertisement
  ) => Promise<void>;
};
