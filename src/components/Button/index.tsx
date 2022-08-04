import React, { ReactNode } from "react";
import { ButtonStyled } from "./styles";

export interface IProps {
  typeFont: "big" | "medium";
  typeButton:
    | "default"
    | "negative"
    | "disable"
    | "brand1"
    | "brandOpacity"
    | "light"
    | "outlineLigth"
    | "outline1"
    | "outline2"
    | "outlineBrand1"
    | "outlineBrand2"
    | "link"
    | "alert"
    | "sucess"
    | "brandDisable";
  children?: ReactNode;
}

const Button: React.FC<IProps> = ({ children, typeFont, typeButton }) => {
  return (
    <ButtonStyled typeButton={typeButton} typeFont={typeFont}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
