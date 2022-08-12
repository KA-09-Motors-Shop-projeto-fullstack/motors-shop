export type ModalContextType = {
  showModalCreate: boolean;
  showModalSucess: boolean;
  openModalCreate: () => void;
  openModalSucess: () => void;
  closeModalCreate: () => void;
  closeModalSucess: () => void;
};
