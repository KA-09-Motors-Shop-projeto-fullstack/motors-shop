import { Redirect } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { isAuthenticated } from "../../services/auth";
import { Main } from "./styles";
import React, { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Form } from "./styles";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/Users";
import { UserContextType } from "../../@types/users";
import Input from "../../components/Input";
import { Button } from "../../components/Button";

const LoginPage: React.FC = () => {
  const history = useHistory();
  const { loginUser } = useContext(UserContext) as UserContextType;
  const goSignup = () => history.push("/signup");

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup.string().required("Password obrigatório"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    await loginUser(data);
  };

  if (isAuthenticated()) return <Redirect to="profile" />;

  return (
    <>
      <Header />
      <Main>
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <Input
              register={register}
              label="Email"
              name="email"
              placeholder="Digitar usuário"
              error={!!errors.email?.message}
            />
            <Input
              register={register}
              label="Senha"
              name="password"
              type="password"
              placeholder="Digitar senha"
              error={!!errors.password?.message}
            />
            <span>Esqueci minha senha</span>
            <Button type="submit" typeButton="brand1" typeFont="big">
              Entrar
            </Button>
            <span>Ainda não possui conta?</span>
            <Button onClick={goSignup} typeButton="outline2" typeFont="big">
              Cadastrar
            </Button>
          </Form>
        </Container>
      </Main>
      <Footer />
    </>
  );
};

export default LoginPage;
