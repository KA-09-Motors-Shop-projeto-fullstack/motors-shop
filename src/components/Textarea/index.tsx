// React
import { TextareaContainer, TextareaStyled } from "./styles";
import React from "react";
import { Button } from "@/components/Button";

interface IPropsTextarea {
  placeholder: string;
  register?: any;
  handleSubmit?: any;
  onSubmit?: any;
  error?: boolean;
}

export const Textarea: React.FC<IPropsTextarea> = ({
  placeholder,
  register,
  handleSubmit,
  onSubmit,
  error,
}) => {
  return (
    <TextareaContainer error={error} onSubmit={handleSubmit(onSubmit)}>
      {register ? (
        <>
          <TextareaStyled {...register("text")} placeholder={placeholder} />
          <Button type="submit" typeButton="brand1" typeFont="big">
            Comentar
          </Button>
        </>
      ) : (
        <>
          <TextareaStyled name="text" placeholder={placeholder} />
          <Button
            style={{ cursor: "default" }}
            typeButton="brandDisable"
            typeFont="big"
          >
            Comentar
          </Button>
        </>
      )}
    </TextareaContainer>
  );
};
