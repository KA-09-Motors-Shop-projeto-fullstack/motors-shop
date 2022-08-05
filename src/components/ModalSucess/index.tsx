import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Container, ModalTitle, ParagraphOne, ParagraphTwo } from "./styles";
import Button from "../Button";
import { useHistory } from "react-router-dom";

interface IPropsModalSucess {
  modalShow: boolean;
}

const ModalSucess: React.FC<IPropsModalSucess> = ({ modalShow }) => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const goLogin = () => history.push("/login");

  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
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
