import React from "react";
import { Modal } from "react-bootstrap";
import { Container, ModalTitle, ParagraphOne, ParagraphTwo } from "./styles";
import Button from "../Button";
import { useHistory } from "react-router-dom";

interface IPropsModalSucess {
  modalShow: boolean;
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSucess: React.FC<IPropsModalSucess> = ({
  modalShow,
  setModalShow,
}) => {
  const history = useHistory();
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const goLogin = () => history.push("/login");

  return (
    <Container>
      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalTitle>Sucesso!</ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <ParagraphOne>Sua conta foi criada com sucesso!</ParagraphOne>
          <ParagraphTwo>
            Agora você poderá ver seus negócios crescendo em grande escala
          </ParagraphTwo>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "flex-start" }}>
          <Button onClick={goLogin} typeButton="brand1" typeFont="big">
            Ir para o login
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ModalSucess;
