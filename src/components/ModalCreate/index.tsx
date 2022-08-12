import React, { useContext, useState } from "react";
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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AdvertisementContext } from "../../providers/Advertisements";
import { AdvertisementContextType } from "../../@types/advertisements";
import ModalSucess from "../ModalSucess";
import { ModalContext } from "../../providers/Modals";
import { ModalContextType } from "../../@types/modals";
import { getToken } from "../../services/auth";

const ModalCreate: React.FC = () => {
  // Chamando o provider
  const { createAdvertisement } = useContext(
    AdvertisementContext
  ) as AdvertisementContextType;
  const { closeModalCreate, showModalCreate, openModalSucess } = useContext(
    ModalContext
  ) as ModalContextType;

  // Setando os estados
  const [typeAd, setTypeAd] = useState<string>("sale");
  const [vehicleType, setVehicleType] = useState<string>("car");
  const [amountImage, setAmountImages] = useState<number[]>([1]);

  // Funções que mudam os estados
  const salesAd = () => setTypeAd("sale");
  const aucionAd = () => setTypeAd("auction");
  const vehicleTypeCar = () => setVehicleType("car");
  const vehicleTypeMotorcycle = () => setVehicleType("motorcycle");
  const addMoreImage = () =>
    setAmountImages([...amountImage, amountImage.length + 1]);

  //Schema para o form
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    year: yup.string().required("Campo obrigatório"),
    km: yup.number().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    cover_image: yup.string().required("Campo obrigatório"),
    image1: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Post na API
  const onSubmit = async (data: any) => {
    let images: string[] = [];
    amountImage.forEach((element) => {
      images.push(data[`image${element}`]);
      delete data[`image${element}`];
    });
    data.images = images;
    data = {
      ...data,
      type_ad: typeAd,
      vehicle_type: vehicleType,
    };

    reset();

    const token = getToken();
    await createAdvertisement(token, data).then(() => {
      closeModalCreate();
      openModalSucess();
    });
  };

  return (
    <Container>
      <ModalSucess>Seu anúncio foi criado com sucesso!</ModalSucess>
      <Modal show={showModalCreate} onHide={closeModalCreate}>
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
                  type="number"
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
                name="cover_image"
                register={register}
                error={!!errors.cover_image?.message}
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
            <Button
              onClick={closeModalCreate}
              typeButton="negative"
              typeFont="big"
            >
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
