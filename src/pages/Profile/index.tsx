import React, { useContext, useState } from "react";
import { ModalContextType } from "../../@types/modals";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import ModalCreate from "../../components/ModalCreate";
import { ModalContext } from "../../providers/Modals";
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
  return (
    <main>
      <ModalCreate />
      <Rectangle>
        <Roxo></Roxo>
        <White></White>
      </Rectangle>
      <ContainerInformations>
        <Avatar
          fontSize={36}
          height={104}
          width={104}
          color="random1"
          name="Omar Colombari"
        />
        <NameContainer>
          <NameUser>Samuel Leão</NameUser>
          <Button typeButton="brandOpacity" typeFont="medium">
            Anunciante
          </Button>
        </NameContainer>
        <DescriptionUser>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </DescriptionUser>
        <Button
          onClick={openModalCreate}
          typeButton="outlineBrand1"
          typeFont="big"
        >
          Criar anúncio
        </Button>
      </ContainerInformations>
    </main>
  );
};

export default Profile;
