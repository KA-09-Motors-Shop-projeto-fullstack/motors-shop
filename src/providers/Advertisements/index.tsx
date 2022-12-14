import api from "../../services/api";
import React, { createContext, useState } from "react";
import {
  AdvertisementContextType,
  IAdversiment,
  ICreateAdvertisement,
} from "../../@types/advertisements";

interface IProps {
  children?: React.ReactNode;
}

export const AdvertisementContext =
  createContext<AdvertisementContextType | null>(null);

export const AdvertisementProvider: React.FC<IProps> = ({ children }) => {
  const [advertisements, setAdvertisements] = useState<IAdversiment[]>([]);

  const listAllAdvertisements = async (token: string) => {
    const { data } = await api.get<IAdversiment[]>("/advertisements", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setAdvertisements(data);
  };

  const listAdvertisementsPerUser = async (token: string, userId: string) => {
    const { data } = await api.get<IAdversiment[]>(
      `/advertisements/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setAdvertisements(data);
  };

  const showAdvertisement = async (token: string, advertisementId: string) => {
    const { data } = await api.get<IAdversiment>(
      `/advertisements/${advertisementId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  };

  const createAdvertisement = async (
    token: string,
    data: ICreateAdvertisement
  ) => {
    const { data: res } = await api.post<IAdversiment>(
      "/advertisements",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  return (
    <AdvertisementContext.Provider
      value={{
        advertisements,
        createAdvertisement,
        listAdvertisementsPerUser,
        listAllAdvertisements,
        showAdvertisement,
      }}
    >
      {children}
    </AdvertisementContext.Provider>
  );
};
