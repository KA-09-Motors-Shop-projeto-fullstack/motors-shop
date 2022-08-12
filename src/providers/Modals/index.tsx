import React, { createContext, useState } from "react";
import { ModalContextType } from "../../@types/modals";

interface IProps {
  children?: React.ReactNode;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider: React.FC<IProps> = ({ children }) => {
  const [showModalSucess, setShowModalSucess] = useState<boolean>(false);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);

  const openModalCreate = () => setShowModalCreate(true);
  const openModalSucess = () => setShowModalSucess(true);
  const closeModalCreate = () => setShowModalCreate(false);
  const closeModalSucess = () => setShowModalSucess(false);

  return (
    <ModalContext.Provider
      value={{
        showModalCreate,
        showModalSucess,
        closeModalCreate,
        closeModalSucess,
        openModalCreate,
        openModalSucess,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
