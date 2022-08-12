import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { Container, ModalTitle, ParagraphOne, ParagraphTwo } from "./styles";
import { ModalContext } from "../../providers/Modals";
import { ModalContextType } from "../../@types/modals";

interface IPropsModalSucess {
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const ModalSucess: React.FC<IPropsModalSucess> = ({ children, footer }) => {
  const { showModalSucess, closeModalSucess } = useContext(
    ModalContext
  ) as ModalContextType;
  return (
    <Container>
      <Modal show={showModalSucess} onHide={closeModalSucess}>
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
