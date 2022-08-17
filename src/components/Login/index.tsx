import React, { useContext } from "react";
import Button from "../Button";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Form } from "./styles";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/Users";
import { UserContextType } from "../../@types/users";

const Login: React.FC = () => {
  const history = useHistory();
  const { loginUser } = useContext(UserContext) as UserContextType;

  //Schema para o form
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup.string().required("Password obrigatório"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const goSignup = () => history.push("/signup");

  const onSubmit = () => {
    reset();
  };

  return (
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
  );
};

export default Login;
