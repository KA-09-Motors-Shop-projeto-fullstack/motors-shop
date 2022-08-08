import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {
  Container,
  ModalTitle,
  TypeContainer,
  InformationContainer,
  TitleContainer,
  Title,
  ContainerSpecifications,
  VehicleTypeContainer,
  ImagesRegisterContainer,
} from "./styles";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import Input from "../Input";

interface IPropsModalCreate {
  modalShow: boolean;
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCreate: React.FC<IPropsModalCreate> = ({
  modalShow,
  setModalShow,
}) => {
  const history = useHistory();
  const handleClose = () => setModalShow(false);
  const goLogin = () => history.push("/login");
  const [typeAd, setTypeAd] = useState<string>("sale");
  const [vehicleType, setVehicleType] = useState<string>("car");
  const [amountImage, setAmountImages] = useState<number[]>([1]);

  const salesAd = () => setTypeAd("sale");
  const aucionAd = () => setTypeAd("auction");

  const vehicleTypeCar = () => setVehicleType("car");
  const vehicleTypeMotorcycle = () => setVehicleType("motorcycle");
  const sla = () => setAmountImages([...amountImage, amountImage.length + 1]);
  return (
    <Container>
      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalTitle>Criar anuncio</ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <TypeContainer>
            <Title>Tipo de anuncio</Title>
            <div>
              <Button
                typeButton={typeAd === "sale" ? "brand1" : "outline2"}
                typeFont="big"
                onClick={salesAd}
              >
                Venda
              </Button>
              <Button
                typeButton={typeAd === "auction" ? "brand1" : "outline2"}
                typeFont="big"
                onClick={aucionAd}
              >
                Leilão
              </Button>
            </div>
          </TypeContainer>
          <InformationContainer>
            <Title>Informações do veículo</Title>
            <TitleContainer>
              <Input
                type="text"
                label="Título"
                name="title"
                placeholder="Digitar título"
              />
            </TitleContainer>
            <ContainerSpecifications>
              <Input
                type="text"
                label="Ano"
                name="year"
                placeholder="Digitar ano"
              />
              <Input
                type="number"
                label="Quilometragem"
                name="km"
                placeholder="0"
              />
              <Input
                type="text"
                label="Preço"
                name="price"
                placeholder="Digitar preço"
              />
            </ContainerSpecifications>
            <Input
              type="text"
              label="Descrição"
              name="description"
              placeholder="Digitar descrição"
            />
          </InformationContainer>
          <VehicleTypeContainer>
            <Title>Tipo de anuncio</Title>
            <div>
              <Button
                typeButton={vehicleType === "car" ? "brand1" : "outline2"}
                typeFont="big"
                onClick={vehicleTypeCar}
              >
                Carro
              </Button>
              <Button
                typeButton={
                  vehicleType === "motorcycle" ? "brand1" : "outline2"
                }
                typeFont="big"
                onClick={vehicleTypeMotorcycle}
              >
                Moto
              </Button>
            </div>
          </VehicleTypeContainer>
          <ImagesRegisterContainer>
            <Input
              placeholder="Inserir URL da imagem"
              type="text"
              label="Inserir URL da imagem"
              name="coverImage"
            />
            {amountImage.map((element) => {
              return (
                <Input
                  placeholder="Inserir URL da imagem"
                  type="text"
                  label={`${element}° Imagem da galeria`}
                  name="coverImage"
                />
              );
            })}
            <Button onClick={sla} typeButton="brandOpacity" typeFont="big">
              Adicionar campo para imagem da galeria
            </Button>
          </ImagesRegisterContainer>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "flex-end" }}>
          <Button typeButton="negative" typeFont="big">
            Cancelar
          </Button>
          <Button typeButton="brandDisable" typeFont="big">
            Criar anúncio
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ModalCreate;
