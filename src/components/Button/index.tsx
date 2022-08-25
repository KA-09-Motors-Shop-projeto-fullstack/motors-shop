import React, { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./styles";

export interface IPropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
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
}

const Button: React.FC<IPropsButton> = ({
  children,
  typeFont,
  typeButton,
  onClick,
  type = "button",
  ...rest
}) => {
  return (
    <ButtonStyled
      {...rest}
      type={type}
      onClick={onClick}
      typeButton={typeButton}
      typeFont={typeFont}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
