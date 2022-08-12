import React from "react";
import { Modal } from "react-bootstrap";
import { Container, ModalTitle, ParagraphOne, ParagraphTwo } from "./styles";
import Button from "../Button";
import { useHistory } from "react-router-dom";

interface IPropsModalSucess {
  modalShow: boolean;
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const ModalSucess: React.FC<IPropsModalSucess> = ({
  modalShow,
  setModalShow,
  children,
  footer,
}) => {
  const history = useHistory();
  const handleClose = () => setModalShow(false);

  return (
    <Container>
      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalTitle>Sucesso!</ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <ParagraphOne>{children}</ParagraphOne>
          <ParagraphTwo>
            Agora você poderá ver seus negócios crescendo em grande escala
          </ParagraphTwo>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "flex-start" }}>
          {footer}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ModalSucess;
