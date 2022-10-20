// React
import React, { useContext, useState } from "react";

// Bootstrap
import { Modal } from "react-bootstrap";

// Style
import { Container, ContainerButtons, Form, ModalTitle } from "./styles";

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

// Moment
import moment from "moment";
import { getTokenLocalStorage } from "services/auth";

// Intefaces

interface IFormProps {
  name?: string;
  email?: string;
  cpf?: string;
  phoneNumber?: string;
  birthDate?: string;
  description?: string;
}

export const ModalEditProfile: React.FC = () => {
  // Chamando providers
  const { modalEditProfileIsOpen, closeModalEditProfile } = useContext(
    ModalContext
  ) as ModalContextType;
  const { userLogged: user, updateUser } = useContext(
    UserContext
  ) as UserContextType;

  // Hook Form
  const schema = yup.object({
    name: yup.string().notRequired(),
    email: yup.string().email("Email inválido").notRequired(),
    cpf: yup.string().notRequired(),
    phoneNumber: yup.string().notRequired(),
    birthDate: yup.string().notRequired(),
    description: yup.string().notRequired(),
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

    if (data.cpf) {
      data.cpf = data.cpf.replace(/\D+/g, "");
    }
    if (data.birthDate) {
      const [day, month, year] = data.birthDate.split("/");
      data.birthDate = moment(`${year}-${month}-${day}`).toISOString();
    }

    updateUser(data, getTokenLocalStorage()).then(() => {
      reset();
      closeModalEditProfile();
    });
  };
  return (
    <Container>
      <Modal show={modalEditProfileIsOpen} onHide={closeModalEditProfile}>
        <Modal.Header closeButton>
          <ModalTitle>Editar perfil</ModalTitle>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ModalTitle>Informações pessoais</ModalTitle>
          <Input
            name="name"
            register={register}
            placeholder={user?.name}
            label="Nome"
          />
          <Input
            name="email"
            register={register}
            placeholder={user?.email}
            label="Email"
            error={!!errors.email}
          />
          <Input
            name="cpf"
            register={register}
            placeholder={user?.cpf.replace(
              /(\d{3})(\d{3})(\d{3})(\d{2})/,
              "$1.$2.$3-$4"
            )}
            label="CPF"
            mask="999.999.999-99"
          />
          <Input
            name="phoneNumber"
            register={register}
            placeholder={user?.phoneNumber.replace(
              /^(\d\d)(\d{5})(\d{4}).*/,
              "($1) $2-$3"
            )}
            label="Celular"
            mask="(99) 9999-9999"
          />
          <Input
            name="birthDate"
            register={register}
            placeholder={moment(user?.birthDate).utc().format("DD/MM/YYYY")}
            label="Data de nascimento"
            error={!!errors.birthDate}
            mask="99/99/9999"
          />
          <Input
            name="description"
            register={register}
            placeholder={user?.description}
            label="Descrição"
          />
          <ContainerButtons>
            <Button
              onClick={() => {
                closeModalEditProfile();
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
