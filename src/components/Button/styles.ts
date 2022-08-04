import styled, { css } from "styled-components";
import { IProps } from ".";

class Buttons {
  static default = css<IProps>`
    background-color: ${(props) => props.theme.colors.grey0};
    color: ${(props) => props.theme.colors.whiteFixed};
    border: 1.5px solid ${(props) => props.theme.colors.grey0};
    border-radius: 4px;
    :hover {
      background-color: ${(props) => props.theme.colors.grey1};
      border: 1.5px solid ${(props) => props.theme.colors.grey1};
    }
  `;

  static negative = css<IProps>`
    background-color: ${(props) => props.theme.colors.grey6};
    color: ${(props) => props.theme.colors.grey2};
    border: 1.5px solid ${(props) => props.theme.colors.grey6};
    border-radius: 4px;
    :hover {
      background-color: ${(props) => props.theme.colors.grey5};
      border: 1.5px solid ${(props) => props.theme.colors.grey5};
    }
  `;

  static disable = css<IProps>`
    background-color: ${(props) => props.theme.colors.grey5};
    color: ${(props) => props.theme.colors.whiteFixed};
    border: 1.5px solid ${(props) => props.theme.colors.grey5};
    border-radius: 4px;
  `;

  static brand1 = css<IProps>`
    background-color: ${(props) => props.theme.colors.brand1};
    color: ${(props) => props.theme.colors.whiteFixed};
    border: 1.5px solid ${(props) => props.theme.colors.brand1};
    border-radius: 4px;
    :hover {
      background-color: ${(props) => props.theme.colors.brand2};
      border: 1.5px solid ${(props) => props.theme.colors.brand2};
    }
  `;

  static brandOpacity = css<IProps>`
    background-color: ${(props) => props.theme.colors.brand4};
    color: ${(props) => props.theme.colors.brand1};
    border: 1.5px solid ${(props) => props.theme.colors.brand4};
    border-radius: 4px;
    :hover {
      background-color: ${(props) => props.theme.colors.brand2};
      border: 1.5px solid ${(props) => props.theme.colors.brand2};
    }
  `;

  static light = css<IProps>`
    background-color: ${(props) => props.theme.colors.grey10};
    color: ${(props) => props.theme.colors.grey1};
    border: 1.5px solid ${(props) => props.theme.colors.grey10};
    border-radius: 4px;
    :hover {
      background-color: ${(props) => props.theme.colors.brand2};
      border: 1.5px solid ${(props) => props.theme.colors.brand2};
    }
  `;

  static outlineLigth = css<IProps>`
    background-color: ${(props) => props.theme.colors.grey10};
    color: ${(props) => props.theme.colors.grey10};
    border: 1.5px solid ${(props) => props.theme.colors.grey10};
    border-radius: 4px;
    :hover {
      background-color: ${(props) => props.theme.colors.brand4};
      border: 1.5px solid ${(props) => props.theme.colors.brand4};
    }
  `;

  static outline1 = css<IProps>`
    color: ${(props) => props.theme.colors.grey0};
    border: 1.5px solid ${(props) => props.theme.colors.grey0};
    border-radius: 4px;
  `;

  static outline2 = css<IProps>`
    color: ${(props) => props.theme.colors.grey0};
    border: 1.5px solid ${(props) => props.theme.colors.grey4};
    border-radius: 4px;
  `;

  static outlineBrand1 = css<IProps>`
    color: ${(props) => props.theme.colors.brand1};
    border: 1.5px solid ${(props) => props.theme.colors.brand1};
    border-radius: 4px;
    :hover {
      background-color: ${(props) => props.theme.colors.brand4};
      border: 1.5px solid ${(props) => props.theme.colors.brand4};
    }
  `;

  static outlineBrand2 = css<IProps>`
    color: ${(props) => props.theme.colors.brand1};
    border: 1.5px solid ${(props) => props.theme.colors.brand1};
    border-radius: 4px;
  `;

  static link = css<IProps>`
    color: ${(props) => props.theme.colors.grey0};
    :hover {
      background-color: ${(props) => props.theme.colors.grey8};
    }
  `;

  static alert = css<IProps>`
    background-color: ${(props) => props.theme.colors.alert3};
    border: 1.5px solid ${(props) => props.theme.colors.alert3};
    border-radius: 4px;
    color: ${(props) => props.theme.colors.alert1};
    :hover {
      background: ${(props) => props.theme.colors.alert2};
      border: 1.5px solid ${(props) => props.theme.colors.alert2};
    }
  `;

  static sucess = css<IProps>`
    background-color: ${(props) => props.theme.colors.sucess3};
    border: 1.5px solid ${(props) => props.theme.colors.sucess3};
    border-radius: 4px;
    color: ${(props) => props.theme.colors.sucess1};
    :hover {
      background: ${(props) => props.theme.colors.sucess2};
      border: 1.5px solid ${(props) => props.theme.colors.sucess2};
    }
  `;

  static brandDisable = css<IProps>`
    background-color: ${(props) => props.theme.colors.brand3};
    border: 1.5px solid ${(props) => props.theme.colors.brand3};
    border-radius: 4px;
    color: ${(props) => props.theme.colors.brand4};
  `;
  static big = css<IProps>`
    font: ${(props) => props.theme.fonts["button-big-text"]};
    padding: 12px 28px;
  `;
  static medium = css<IProps>`
    font: ${(props) => props.theme.fonts["button-medium-text"]};
    padding: 12px 20px;
  `;
}

export const ButtonStyled = styled.button<IProps>`
  ${(props) => props.typeFont === "big" && Buttons.big}
  ${(props) => props.typeFont === "medium" && Buttons.medium}
  ${(props) => props.typeButton === "default" && Buttons.default}
  ${(props) => props.typeButton === "negative" && Buttons.negative}
  ${(props) => props.typeButton === "disable" && Buttons.disable}
  ${(props) => props.typeButton === "brand1" && Buttons.brand1}
  ${(props) => props.typeButton === "brandOpacity" && Buttons.brandOpacity}
  ${(props) => props.typeButton === "light" && Buttons.light}
  ${(props) => props.typeButton === "outlineLigth" && Buttons.outlineLigth}
  ${(props) => props.typeButton === "outline1" && Buttons.outline1}
  ${(props) => props.typeButton === "outline2" && Buttons.outline2}
  ${(props) => props.typeButton === "outlineBrand1" && Buttons.outlineBrand1}
  ${(props) => props.typeButton === "outlineBrand2" && Buttons.outlineBrand2}
  ${(props) => props.typeButton === "link" && Buttons.link}
  ${(props) => props.typeButton === "alert" && Buttons.alert}
  ${(props) => props.typeButton === "sucess" && Buttons.sucess}
  ${(props) => props.typeButton === "brandDisable" && Buttons.brandDisable}
`;
