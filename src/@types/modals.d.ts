export type ModalContextType = {
  modalCreateIsOpen: boolean;
  modalSucessIsOpen: boolean;
  modalEditProfileIsOpen: boolean;
  openModalCreate: () => void;
  openModalSucess: () => void;
  openModalEditProfile: () => void;
  closeModalCreate: () => void;
  closeModalSucess: () => void;
  closeModalEditProfile: () => void;
};
