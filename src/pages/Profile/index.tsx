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

const Profile: React.FC = () => {
  const { openModalCreate } = useContext(ModalContext) as ModalContextType;
  const [ user, setUser ] = useState(getUserLocalStorage());  
  const { id } = useParams<any>();

  useEffect( () => {
    ( async () => {
      const userId = user ? user.id : ""
      
      const response = await api.get("/")
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
          <Avatar fontSize={36} size={104} color={user.avatarColor} name={user.name} />
          <NameContainer>
            <NameUser>{user.name}</NameUser>
            <Button typeButton="brandOpacity" typeFont="medium">
              {user.isSeller && "Anunciante"}
            </Button>
          </NameContainer>
          <DescriptionUser>{user.description}</DescriptionUser>
          <Button
            onClick={openModalCreate}
            typeButton="outlineBrand1"
            typeFont="big"
          >
            Criar anúncio
          </Button>
        </ContainerInformations>

        hello?
      </main>
      <Footer />
    </>
  );
};

export default Profile;
