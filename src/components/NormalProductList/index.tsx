import ProductCard from "../ProductCard";
import { Container } from "./styles";
import { IAdvertisement } from "../../@types/advertisements";

interface IProps {
  title: string;
  advertisements: IAdvertisement[];
}

export const NormalProductList = ({ advertisements, title }: IProps) => {
  const cards = advertisements.map((advertisement) => {
    return (
      <li>
        <ProductCard
          carAdvertiser={advertisement.user.name}
          carDescription={advertisement.description}
          carImage={advertisement.coverImage}
          carKm={String(advertisement.km)}
          carPrice={String(advertisement.price)}
          carTitle={advertisement.title}
          carYear={advertisement.year}
          carId={advertisement.id}
          key={advertisement.id}
        />
      </li>
    );
  });

  return (
    <Container>
      <h2>{title}</h2>
      <ul>{cards}</ul>
    </Container>
  );
};
