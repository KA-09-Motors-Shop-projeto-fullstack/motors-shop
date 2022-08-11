import React from "react";
import { AdvertisementProvider } from "./Advertisements";

interface IProps {
  children: React.ReactNode;
}

const Providers: React.FC<IProps> = ({ children }) => {
  return <AdvertisementProvider>{children}</AdvertisementProvider>;
};

export default Providers;
