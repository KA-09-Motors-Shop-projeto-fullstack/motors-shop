import React, { ReactNode } from "react";
import { Container, InputStyle, Label } from "./styles";

interface IPropsInput {
  children?: ReactNode;
  register?: any;
  label: string;
  name: string;
  placeholder: string;
  type: string;
}

const Input: React.FC<IPropsInput> = ({
  label,
  name,
  type,
  children,
  register,
  placeholder,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputStyle type={type} name={name} placeholder={placeholder} />
    </Container>
  );
};
export default Input;
