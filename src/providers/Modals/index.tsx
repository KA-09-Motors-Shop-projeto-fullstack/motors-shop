import React, { createContext, useState } from "react";
import { ModalContextType } from "../../@types/modals";

interface IProps {
  children?: React.ReactNode;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider: React.FC<IProps> = ({ children }) => {
  const [modalSucessIsOpen, setModalSucessIsOpen] = useState<boolean>(false);
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState<boolean>(false);
  const [modalEditProfileIsOpen, setModalEditProfileIsOpen] =
    useState<boolean>(false);
  const [modalEditAddressIsOpen, setModalEditAddressIsOpen] =
    useState<boolean>(false);

  const openModalCreate = () => setModalCreateIsOpen(true);
  const openModalSucess = () => setModalSucessIsOpen(true);
  const openModalEditProfile = () => setModalEditProfileIsOpen(true);
  const openModalEditAddress = () => setModalEditAddressIsOpen(true);

  const closeModalCreate = () => setModalCreateIsOpen(false);
  const closeModalSucess = () => setModalSucessIsOpen(false);
  const closeModalEditProfile = () => setModalEditProfileIsOpen(false);
  const closeModalEditAddress = () => setModalEditAddressIsOpen(false);

  return (
    <ModalContext.Provider
      value={{
        modalSucessIsOpen,
        modalCreateIsOpen,
        modalEditProfileIsOpen,
        modalEditAddressIsOpen,
        closeModalCreate,
        closeModalSucess,
        closeModalEditAddress,
        openModalEditAddress,
        openModalCreate,
        openModalSucess,
        closeModalEditProfile,
        openModalEditProfile,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
