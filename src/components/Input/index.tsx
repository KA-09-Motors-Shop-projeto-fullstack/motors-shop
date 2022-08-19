import React, { InputHTMLAttributes } from "react";
import { Container, InputStyle, Label } from "./styles";

export interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  register: any;
  label: string;
  error?: boolean;
}

const Input: React.FC<IPropsInput> = ({
  label,
  name,
  type = "text",
  register,
  placeholder,
  error,
  ...rest
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputStyle
        {...rest}
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
