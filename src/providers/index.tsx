import React from "react";
import { AdvertisementProvider } from "./Advertisements";
import { ModalProvider } from "./Modals";

interface IProps {
  children: React.ReactNode;
}

const Providers: React.FC<IProps> = ({ children }) => {
  return (
    <ModalProvider>
      <AdvertisementProvider>{children}</AdvertisementProvider>
    </ModalProvider>
  );
};

export default Providers;
