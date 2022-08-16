import React from "react";
import Button from "../Button";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Form } from "./styles";

const Login: React.FC = () => {
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

  const onSubmit = () => {
    reset();
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <span>Ainda não possui uma conta?</span>
        <Button typeButton="outline2" typeFont="big">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
