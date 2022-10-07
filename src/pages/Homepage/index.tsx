import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { InfoNavContainer, ListsContainer, Main } from "./styles";
import { NormalProductList } from "../../components/NormalProductList";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import {
  AdvertisementContextType,
  IAdvertisement,
} from "../../@types/advertisements";
import { AdvertisementContext } from "../../providers/Advertisements";

export const HomePage = () => {
  const { advertisements } = useContext(
    AdvertisementContext
  ) as AdvertisementContextType;
  const [cars, setCars] = useState<IAdvertisement[]>([]);
  const [bikes, setBikes] = useState<IAdvertisement[]>([]);

  useEffect(() => {
    setCars(
      advertisements.filter(
        (advertisement) => advertisement.vehicleType == "car"
      )
    );
    setBikes(
      advertisements.filter(
        (advertisement) => advertisement.vehicleType == "motorcycle"
      )
    );
  }, [advertisements]);

  return (
    <>
      <Header />

      <Main>
        <InfoNavContainer>
          <div>
            <h2>Velocidade e experiência em um lugar feito para você</h2>
            <p>Um ambiente feito para você explorar o seu melhor</p>
          </div>

          <nav>
            <Button typeButton="outline2" typeFont="medium" children="Leilão" />

            <Button typeButton="outline2" typeFont="medium" children="Carros" />

            <Button typeButton="outline2" typeFont="medium" children="Motos" />
          </nav>
        </InfoNavContainer>

        <ListsContainer>
          {cars.length ? (
            <NormalProductList title="Carros" advertisements={cars} />
          ) : undefined}

          {bikes.length ? (
            <NormalProductList title="Motos" advertisements={bikes} />
          ) : undefined}
        </ListsContainer>
      </Main>

      <Footer />
    </>
  );
};
