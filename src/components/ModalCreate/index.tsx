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
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IPropsModalCreate {
  modalShow: boolean;
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

type Inputs = {
  title: string;
  year: string;
  km: string;
  price: string;
  description: string;
  coverImage: string;
};

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
  const addMoreImage = () =>
    setAmountImages([...amountImage, amountImage.length + 1]);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    year: yup.string().required("Campo obrigatório"),
    km: yup.number().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    coverImage: yup.string().required("Campo obrigatório"),
    image1: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    let images: string[] = [];
    amountImage.forEach((element) => {
      images.push(data[`image${element}`]);
      delete data[`image${element}`];
    });
    data.images = images;
    console.log({ ...data, typeAd, vehicleType });
  };
  console.log(errors);

  return (
    <Container>
      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalTitle>Criar anúncio</ModalTitle>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <TypeContainer>
              <Title>Tipo de anúncio</Title>
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
                  register={register}
                  error={!!errors.title?.message}
                />
              </TitleContainer>
              <ContainerSpecifications>
                <Input
                  type="text"
                  label="Ano"
                  name="year"
                  placeholder="Digitar ano"
                  register={register}
                  error={!!errors.year?.message}
                />
                <Input
                  type="number"
                  label="Quilometragem"
                  name="km"
                  placeholder="0"
                  register={register}
                  error={!!errors.km?.message}
                />
                <Input
                  type="text"
                  label="Preço"
                  name="price"
                  placeholder="Digitar preço"
                  register={register}
                  error={!!errors.price?.message}
                />
              </ContainerSpecifications>
              <Input
                type="text"
                label="Descrição"
                name="description"
                placeholder="Digitar descrição"
                error={!!errors.description?.message}
                register={register}
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
                register={register}
                error={!!errors.coverImage?.message}
              />
              {amountImage.map((element) => {
                return (
                  <Input
                    key={element}
                    placeholder="Inserir URL da imagem"
                    type="text"
                    label={`${element}° Imagem da galeria`}
                    name={`image${element}`}
                    register={register}
                    error={!!errors[`image${element}`]?.message}
                  />
                );
              })}
              <Button
                onClick={addMoreImage}
                typeButton="brandOpacity"
                typeFont="big"
              >
                Adicionar campo para imagem da galeria
              </Button>
            </ImagesRegisterContainer>
          </Modal.Body>
          <Modal.Footer style={{ justifyContent: "flex-end" }}>
            <Button typeButton="negative" typeFont="big">
              Cancelar
            </Button>
            {Object.keys(errors).length ? (
              <Button type="submit" typeButton="brandDisable" typeFont="big">
                Criar anúncio
              </Button>
            ) : (
              <Button type="submit" typeButton="brand1" typeFont="big">
                Criar anúncio
              </Button>
            )}
          </Modal.Footer>
        </form>
      </Modal>
    </Container>
  );
};

export default ModalCreate;
