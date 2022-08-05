import React, { ReactNode } from "react";
import { ButtonStyled } from "./styles";

export interface IPropsButton {
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
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IPropsButton> = ({
  children,
  typeFont,
  typeButton,
  onClick,
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      typeButton={typeButton}
      typeFont={typeFont}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
