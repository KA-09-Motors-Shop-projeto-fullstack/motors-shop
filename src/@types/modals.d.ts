export type ModalContextType = {
  modalCreateIsOpen: boolean;
  modalSucessIsOpen: boolean;
  modalEditProfileIsOpen: boolean;
  modalEditAddressIsOpen: boolean;
  openModalCreate: () => void;
  openModalSucess: () => void;
  openModalEditProfile: () => void;
  openModalEditAddress: () => void;
  closeModalCreate: () => void;
  closeModalSucess: () => void;
  closeModalEditProfile: () => void;
  closeModalEditAddress: () => void;
};
