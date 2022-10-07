// React
import { TextareaContainer } from "./styles";
import React from "react";
import { Button } from "@/components/Button";

interface IPropsTextarea {
  placeholder: string;
  register?: any;
  name?: string;
  handleSubmit?: any;
  onSubmit?: any;
  error?: boolean;
}

export const Textarea: React.FC<IPropsTextarea> = ({
  placeholder,
  register,
  name,
  handleSubmit,
  onSubmit,
  error,
}) => {
  return (
    <TextareaContainer error={error} onSubmit={handleSubmit(onSubmit)}>
      <Textarea {...register(name)} placeholder={placeholder} />
      <Button type="submit" typeButton="brand1" typeFont="big">
        Comentar
      </Button>
    </TextareaContainer>
  );
};
