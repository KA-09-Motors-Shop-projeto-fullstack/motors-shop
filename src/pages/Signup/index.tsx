import React, { useContext, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
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
import { UserContext } from "../../providers/Users";
import { UserContextType } from "../../@types/users";
import ModalSucess from "../../components/ModalSucess";
import { ModalContext } from "../../providers/Modals";
import { ModalContextType } from "../../@types/modals";
import { animateScroll } from "react-scroll";

const SignupPage: React.FC = () => {
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const { signupUser } = useContext(UserContext) as UserContextType;
  const { openModalSucess, closeModalSucess } = useContext(
    ModalContext
  ) as ModalContextType;
  const history = useHistory();

  const typeAccountSeller = () => setIsSeller(true);
  const typeAccountBuyer = () => setIsSeller(false);

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    cpf: yup.string().required("Cpf obrigatório"),
    phone_number: yup.string().required("Número de celular obrigatório"),
    birth_date: yup
      .string()
      .required("Data de nascimento obrigatório")
      .matches(
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
        "Data de nascimento inválida!"
      ),
    description: yup.string().required("Descrição obrigatório"),
    cep: yup.string().required("Cep obrigatório"),
    state: yup.string().required("Estado obrigatório"),
    city: yup.string().required("Cidade obrigatório"),
    street: yup.string().required("Rua obrigatório"),
    number: yup.number().required("Número obrigatório"),
    complement: yup.string().notRequired(),
    password: yup.string().required("Senha obrigatório"),
    confirmPassword: yup
      .string()
      .required("Confirmar senha obrigatório")
      .oneOf([yup.ref("password")], "Senhas devem ser iguais"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    data.cpf = data.cpf.replace(/\D+/g, "");
    data.cep = data.cep.replace(/\D+/g, "");
    data.phone_number = data.phone_number.replace(/\D+/g, "");
    const [day, month, year] = data.birth_date.split("/");
    data.birth_date = `${year}-${month}-${day}`;
    data.is_seller = isSeller;

    await signupUser(data).then(() => {
      animateScroll.scrollToTop();
      openModalSucess();
    });
  };

  const goLogin = () => {
    history.push("/login");
    closeModalSucess();
  };
  if (isAuthenticated()) return <Redirect to="/profile" />;
  return (
    <>
      <Header />
      <Main>
        <ModalSucess
          children="Sua conta foi criada com sucesso"
          footer={
            <Button
              typeButton="brand1"
              typeFont="big"
              children="Ir para login"
              onClick={goLogin}
            />
          }
        />
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Cadastro</h2>
            <PersonalInformation>
              <h3>Informaçõs pessoais</h3>
              <Input
                label="Nome"
                placeholder="Ex: Samuel Leão"
                name="name"
                register={register}
                error={!!errors.name?.message}
              />
              <Input
                label="Email"
                placeholder="Ex: samuel@kenzie.com.br"
                name="email"
                register={register}
                error={!!errors.email?.message}
              />
              <Input
                label="Cpf"
                mask="999.999.999-99"
                placeholder="000.000.000-00"
                name="cpf"
                register={register}
                error={!!errors.cpf?.message}
              />
              <Input
                label="Celular"
                mask="(99) 99999-9999"
                placeholder="(DDD) 90000-0000"
                name="phone_number"
                register={register}
                error={!!errors.phone_number?.message}
              />
              <Input
                label="Data de nascimento"
                mask="99/99/9999"
                placeholder="00/00/0000"
                name="birth_date"
                register={register}
                error={!!errors.birth_date?.message}
              />
              <Input
                label="Descrição"
                placeholder="Digitar descrição"
                name="description"
                register={register}
                error={!!errors.description?.message}
              />
            </PersonalInformation>
            <AddressInformation>
              <Input
                label="CEP"
                mask="99999-999"
                placeholder="00000-000"
                name="cep"
                register={register}
                error={!!errors.cep?.message}
              />
              <div>
                <Input
                  label="Estado"
                  placeholder="Digitar estado"
                  name="state"
                  register={register}
                  error={!!errors.state?.message}
                />
                <Input
                  label="Cidade"
                  placeholder="Digitar cidade"
                  name="city"
                  register={register}
                  error={!!errors.city?.message}
                />
              </div>
              <Input
                label="Rua"
                placeholder="Digitar rua"
                name="street"
                register={register}
                error={!!errors.street?.message}
              />
              <div>
                <Input
                  label="Número"
                  placeholder="Digitar número"
                  name="number"
                  type="number"
                  register={register}
                  error={!!errors.number?.message}
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
              type="password"
              register={register}
              error={!!errors.password?.message}
            />
            <Input
              label="Confirmar senha"
              placeholder="Digitar senha"
              name="confirmPassword"
              register={register}
              className="teste"
              type="password"
              error={!!errors.confirmPassword?.message}
            />
            <Button
              typeButton="brand1"
              typeFont="big"
              children="Finalizar cadastro"
              className="confirmButton"
              type="submit"
            />
          </Form>
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default SignupPage;
