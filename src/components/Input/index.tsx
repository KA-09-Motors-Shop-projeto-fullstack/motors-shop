import React, { InputHTMLAttributes } from "react";
import { Container, InputStyle, Label } from "./styles";
import InputMask from "react-input-mask";

export interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  register: any;
  name: string;
  label?: string;
  error?: boolean;
  mask?: string;
}

const Input: React.FC<IPropsInput> = ({
  label,
  name,
  type = "text",
  register,
  placeholder,
  error,
  mask,
  ...rest
}) => {
  return (
    <Container error={error}>
      <Label>{label}</Label>
      {mask ? (
        <InputMask
          mask={mask}
          {...rest}
          {...register(name)}
          type={type}
          name={name}
          placeholder={placeholder}
        ></InputMask>
      ) : (
        <InputStyle
          {...rest}
          {...register(name)}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      )}
    </Container>
  );
};
export default Input;
