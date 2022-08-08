import React from "react";
import {
  Advertiser,
  Avatar,
  CardFooter,
  Container,
  ContainerTags,
  Description,
  Figure,
  Price,
  Title,
} from "./styles";
import image from "../../assets/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview 1.png";
import Button from "../Button";

interface IPropsProductCard {
  carTitle: string;
  carDescription: string;
  carPrice: string;
  carKm: string;
  carYear: number;
  carImage: string;
  carAdvertiser: string;
}

const ProductCard: React.FC<IPropsProductCard> = ({
  carDescription,
  carKm,
  carTitle,
  carPrice,
  carYear,
  carImage,
  carAdvertiser,
}) => {
  return (
    <Container>
      <Figure>
        <img src={carImage} alt={carTitle} />
      </Figure>
      <Title>{carTitle}</Title>
      <Description>{carDescription}</Description>
      <Advertiser>
        <Avatar>{carAdvertiser[0]}</Avatar>
        <span>carAdvertiser</span>
      </Advertiser>
      <CardFooter>
        <ContainerTags>
          <Button typeButton="brandOpacity" typeFont="medium">
            {carKm} KM
          </Button>
          <Button typeButton="brandOpacity" typeFont="medium">
            {carYear}
          </Button>
        </ContainerTags>
        <Price>R$ {carPrice},00</Price>
      </CardFooter>
    </Container>
  );
};

export default ProductCard;
