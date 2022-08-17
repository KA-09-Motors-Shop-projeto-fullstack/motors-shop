import React, { ReactNode } from "react";
import { Container, InputStyle, Label } from "./styles";

export interface IPropsInput {
  children?: ReactNode;
  register: any;
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  error?: boolean;
}

const Input: React.FC<IPropsInput> = ({
  label,
  name,
  type = "text",
  children,
  register,
  placeholder,
  error,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputStyle
        {...register(name)}
        type={type}
        name={name}
        placeholder={placeholder}
        error={error}
      />
    </Container>
  );
};
export default Input;
