import React, { useContext, useEffect, useState } from "react";
import { ModalContextType } from "../../@types/modals";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ModalCreate from "../../components/ModalCreate";
import { ModalContext } from "../../providers/Modals";
import { getUserLocalStorage } from "../../services/auth";
import {
  ContainerInformations,
  NameUser,
  DescriptionUser,
  Rectangle,
  White,
  Roxo,
  NameContainer,
} from "./styles";
import api from "../../services/api"
import { useParams } from "react-router-dom";
import { NormalProductList } from "../../components/NormalProductList";
import { filterByCarType } from "../../utils/filterByCarType";

const Profile: React.FC = () => {
  const userLocalStorage = getUserLocalStorage()

  const { openModalCreate } = useContext(ModalContext) as ModalContextType;
  const [ user, setUser ] = useState(userLocalStorage);
  const [ cars, setCars] = useState([]);
  const [ bikes, setBikes] = useState([]);
  const { id } = useParams<any>();

  useEffect( () => {
    ( async () => {
      if(!id) return
      
      const [ userResponse, advertisementResponse ] = await Promise.all([
        api.get(`/users/list/${id}`),
        api.get(`/advertisements/user/${id}`)
      ])

      const filteredCars = filterByCarType(advertisementResponse.data, "car", "carro")
      const filteredBikes = filterByCarType(advertisementResponse.data, "moto", "bike", "motorcicle")

      setUser(userResponse.data)
      setCars(filteredCars as any)
      setBikes(filteredBikes as any)
    })()
  },[])

  return (
    <>
      <Header />
      <main>
        <ModalCreate />
        <Rectangle>
          <Roxo></Roxo>
          <White></White>
        </Rectangle>
        <ContainerInformations>
        {
          !!Object.entries(user).length && (
            <>
              <Avatar fontSize={36} size={104} color={user.avatarColor} name={user.name} />
              <NameContainer>
                <NameUser>{user.name}</NameUser>
                <Button typeButton="brandOpacity" typeFont="medium">
                  {user.isSeller && "Anunciante"}
                </Button>
              </NameContainer>
              <DescriptionUser>{user.description}</DescriptionUser>
            </>
          )
        }
        {
          userLocalStorage?.id === user.id && (
            <Button
              onClick={openModalCreate}
              typeButton="outlineBrand1"
              typeFont="big"
            >
              Criar anúncio
            </Button>
          )
        }
        </ContainerInformations>
        {
            cars.length ? (
              <NormalProductList
                listTitle="Carros"
                allData={cars}
              />
            ) : undefined
          }

          {
            bikes.length ? (
              <NormalProductList
                listTitle="Motos"
                allData={bikes}
              />
            ) : undefined
          }
      </main>
      <Footer />
    </>
  );
};

export default Profile;
