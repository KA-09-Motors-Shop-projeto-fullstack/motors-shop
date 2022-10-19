// React
import React, { useContext } from "react";

// Bootstrap
import { Modal } from "react-bootstrap";

// Styles
import { Container, ModalTitle, ParagraphOne, ParagraphTwo } from "./styles";

// Providers
import { ModalContext } from "@/providers/Modals";

// Types
import { ModalContextType } from "@/types/modals";

// Interfaces
interface IPropsModalSucess {
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const ModalSucess: React.FC<IPropsModalSucess> = ({
  children,
  footer,
}) => {
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
