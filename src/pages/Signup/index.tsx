import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { isAuthenticated } from "../../services/auth";
import {
  AddressInformation,
  Container,
  Form,
  Main,
  PersonalInformation,
  TypeAccount,
} from "./styles";

const SignupPage: React.FC = () => {
  const [isSeller, setIsSeller] = useState<boolean>(false);

  const typeAccountSeller = () => setIsSeller(true);
  const typeAccountBuyer = () => setIsSeller(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (isAuthenticated()) return <Redirect to="/profile" />;
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Form>
            <h2>Cadastro</h2>
            <PersonalInformation>
              <h3>Informaçõs pessoais</h3>
              <Input
                label="Nome"
                placeholder="Ex: Samuel Leão"
                name="name"
                register={register}
              />
              <Input
                label="Email"
                placeholder="Ex: samuel@kenzie.com.br"
                name="email"
                register={register}
              />
              <Input
                label="Cpf"
                placeholder="000.000.000-00"
                name="cpf"
                register={register}
              />
              <Input
                label="Celular"
                placeholder="(DDD) 90000-0000"
                name="phone_number"
                register={register}
              />
              <Input
                label="Data de nascimento"
                placeholder="00/00/00"
                name="birth_date"
                register={register}
              />
              <Input
                label="Descrição"
                placeholder="Digitar descrição"
                name="description"
                register={register}
              />
            </PersonalInformation>
            <AddressInformation>
              <Input
                label="CEP"
                placeholder="00000.000"
                name="cep"
                register={register}
              />
              <div>
                <Input
                  label="Estado"
                  placeholder="Digitar estado"
                  name="state"
                  register={register}
                />
                <Input
                  label="Cidade"
                  placeholder="Digitar cidade"
                  name="city"
                  register={register}
                />
              </div>
              <Input
                label="Rua"
                placeholder="Digitar rua"
                name="street"
                register={register}
              />
              <div>
                <Input
                  label="Número"
                  placeholder="Digitar número"
                  name="number"
                  register={register}
                />
                <Input
                  label="Complemento"
                  placeholder="Ex: apart 307"
                  name="complement"
                  register={register}
                />
              </div>
            </AddressInformation>
            <TypeAccount>
              <Button
                typeButton={!isSeller ? "brand1" : "outline2"}
                typeFont="big"
                children="Comprador"
                onClick={typeAccountBuyer}
              />
              <Button
                typeButton={isSeller ? "brand1" : "outline2"}
                typeFont="big"
                children="Anunciante"
                onClick={typeAccountSeller}
              />
            </TypeAccount>
            <Input
              label="Senha"
              placeholder="Digitar senha"
              name="password"
              register={register}
            />
            <Input
              label="Confirmar senha"
              placeholder="Digitar senha"
              name="confirmPassword"
              register={register}
              className="teste"
            />
            <Button
              typeButton="brand1"
              typeFont="big"
              children="Finalizar cadastro"
              className="confirmButton"
            />
          </Form>
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default SignupPage;
