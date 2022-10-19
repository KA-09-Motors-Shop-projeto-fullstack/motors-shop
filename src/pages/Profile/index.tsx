import React, { useContext, useState } from "react";
import { ModalContextType } from "../../@types/modals";
import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalCreate } from "../../components/Modal/CreateAdvertisement";
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

const Profile: React.FC = () => {
  const { openModalCreate } = useContext(ModalContext) as ModalContextType;
  const user = getUserLocalStorage();
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
          <Avatar
            fontSize={36}
            size={104}
            color={user.avatarColor}
            name={user.name}
          />
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
      </main>
      <Footer />
    </>
  );
};

export default Profile;
