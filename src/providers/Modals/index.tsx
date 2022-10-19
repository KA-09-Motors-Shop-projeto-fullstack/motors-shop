import React, { createContext, useState } from "react";
import { ModalContextType } from "../../@types/modals";

interface IProps {
  children?: React.ReactNode;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider: React.FC<IProps> = ({ children }) => {
  const [modalSucessIsOpen, setModalSucessIsOpen] = useState<boolean>(false);
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState<boolean>(false);
  const [modalEditProfileIsOpen, setModalEditIsOpen] = useState<boolean>(false);

  const openModalCreate = () => setModalCreateIsOpen(true);
  const openModalSucess = () => setModalSucessIsOpen(true);
  const openModalEditProfile = () => setModalEditIsOpen(true);

  const closeModalCreate = () => setModalCreateIsOpen(false);
  const closeModalSucess = () => setModalSucessIsOpen(false);
  const closeModalEditProfile = () => setModalEditIsOpen(false);

  return (
    <ModalContext.Provider
      value={{
        modalSucessIsOpen,
        modalCreateIsOpen,
        modalEditProfileIsOpen,
        closeModalCreate,
        closeModalSucess,
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
