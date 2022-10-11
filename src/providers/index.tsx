import React from "react";
import { AdvertisementProvider } from "./Advertisements";
import { CommentProvider } from "./Comments";
import { ModalProvider } from "./Modals";
import { UserProvider } from "./Users";

interface IProps {
  children: React.ReactNode;
}

const Providers: React.FC<IProps> = ({ children }) => {
  return (
    <ModalProvider>
      <AdvertisementProvider>
        <UserProvider>
          <CommentProvider>{children}</CommentProvider>
        </UserProvider>
      </AdvertisementProvider>
    </ModalProvider>
  );
};

export default Providers;
