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
import Button from "../Button";
import { IPropsProductCard } from "./types"
import { Link } from "react-router-dom";

const ProductCard: React.FC<IPropsProductCard> = ({
  carDescription,
  carKm,
  carTitle,
  carPrice,
  carYear,
  carImage,
  advertiserName,
  advertiserId
}) => {
  const MAX_DESCRIPTION_LENGTH = 75

  const formatedPrice = (Number(carPrice) || 0 ).toLocaleString("pt-br", {
    style: "currency", 
    currency: "BRL", 
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  const formatedDescription = carDescription.length > MAX_DESCRIPTION_LENGTH ?
    carDescription.substring(0, MAX_DESCRIPTION_LENGTH - 3) + "..." :
    carDescription;

  return (
    <Container>
      <Figure>
        <img src={carImage} alt={carTitle} />
      </Figure>

      <Title>{carTitle}</Title>
      <Description>{formatedDescription}</Description>

      <Link to={`/profile/${advertiserId}`} >
        <Advertiser>
            <Avatar>{advertiserName[0]}</Avatar>
            <span>{advertiserName}</span>
        </Advertiser>
      </Link>
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
