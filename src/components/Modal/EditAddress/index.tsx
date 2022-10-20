// React
import React, { useContext, useState } from "react";

// Bootstrap
import { Modal } from "react-bootstrap";

// Style
import {
  Container,
  ContainerButtons,
  Form,
  ModalTitle,
  ContainerInputs,
} from "./styles";

// Components
import Input from "@/components/Input";
import { Button } from "@/components/Button";

// Hook form e Yup
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Types
import { UserContextType } from "@/types/users";
import { ModalContextType } from "@/types/modals";

// Providers
import { ModalContext } from "@/providers/Modals";
import { UserContext } from "@/providers/Users";

import { getTokenLocalStorage } from "services/auth";
import { IAddress } from "@/types/adresses";
import api from "services/api";
import { toast } from "react-toastify";

// Intefaces

interface IFormProps {
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: number;
  complement?: string;
}

export const ModalEditAddress: React.FC = () => {
  // Chamando providers
  const { modalEditAddressIsOpen, closeModalEditAddress } = useContext(
    ModalContext
  ) as ModalContextType;
  const { userLogged, addressUserLogged, updateAdress } = useContext(
    UserContext
  ) as UserContextType;

  // Hook Form
  const schema = yup.object({
    cep: yup.string().notRequired(),
    state: yup.string().notRequired(),
    city: yup.string().notRequired(),
    street: yup.string().notRequired(),
    number: yup.string().notRequired(),
    complement: yup.string().notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormProps>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormProps) => {
    for (let i in data) {
      if ((data as Record<string, string>)[i] == "") {
        delete (data as Record<string, string>)[i];
      }
    }

    if (data.cep) {
      data.cep = data.cep.replace(/\D+/g, "");
    }

    updateAdress(data, getTokenLocalStorage()).then(() => {
      reset();
      closeModalEditAddress()
    });
  };
  return (
    <Container>
      <Modal show={modalEditAddressIsOpen} onHide={closeModalEditAddress}>
        <Modal.Header closeButton>
          <ModalTitle>Editar endereço</ModalTitle>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ModalTitle>Infomações de endereço</ModalTitle>
          <Input
            name="cep"
            register={register}
            placeholder={addressUserLogged?.cep
              .replace(/\D/g, "")
              .replace(/(\d{5})(\d)/, "$1-$2")
              .replace(/(-\d{3})\d+?$/, "$1")}
            label="CEP"
            mask="99999-999"
          />
          <ContainerInputs>
            <Input
              name="state"
              register={register}
              placeholder={addressUserLogged?.state}
              label="Estado"
            />
            <Input
              name="city"
              register={register}
              placeholder={addressUserLogged?.city}
              label="Cidade"
            />
          </ContainerInputs>
          <Input
            name="street"
            register={register}
            placeholder={addressUserLogged?.street}
            label="Rua"
          />
          <ContainerInputs>
            <Input
              name="number"
              register={register}
              placeholder={String(addressUserLogged?.number)}
              label="Número"
            />
            <Input
              name="complement"
              register={register}
              placeholder={
                addressUserLogged?.complement
                  ? addressUserLogged?.complement
                  : "Opcional"
              }
              label="Complemento"
            />
          </ContainerInputs>

          <ContainerButtons>
            <Button
              onClick={() => {
                closeModalEditAddress();
                reset();
              }}
              typeButton="outline1"
              typeFont="big"
            >
              Cancelar
            </Button>
            <Button type="submit" typeButton="brand1" typeFont="big">
              Salvar alterações
            </Button>
          </ContainerButtons>
        </Form>
      </Modal>
    </Container>
  );
};
