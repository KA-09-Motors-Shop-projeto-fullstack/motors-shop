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
import { Button } from "../Button";
import { useHistory } from "react-router-dom";

interface IPropsProductCard {
  carDescription: string;
  carKm: string;
  carTitle: string;
  carPrice: string;
  carYear: number;
  carImage: string;
  carAdvertiser: string;
  carId: string;
}

const ProductCard: React.FC<IPropsProductCard> = ({
  carDescription,
  carKm,
  carTitle,
  carPrice,
  carYear,
  carImage,
  carAdvertiser,
  carId,
}) => {
  const history = useHistory();
  const MAX_DESCRIPTION_LENGTH = 75;

  const formatedPrice = (Number(carPrice) || 0).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formatedDescription =
    carDescription.length > MAX_DESCRIPTION_LENGTH
      ? carDescription.substring(0, MAX_DESCRIPTION_LENGTH - 3) + "..."
      : carDescription;

  return (
    <Container onClick={() => history.push(`/advertisements/${carId}`)}>
      <Figure>
        <img src={carImage} alt={carTitle} />
      </Figure>

      <Title>{carTitle}</Title>
      <Description>{formatedDescription}</Description>

      <Advertiser>
        <Avatar>{carAdvertiser[0]}</Avatar>
        <span>{carAdvertiser}</span>
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
        <Price>{formatedPrice}</Price>
      </CardFooter>
    </Container>
  );
};

export default ProductCard;
