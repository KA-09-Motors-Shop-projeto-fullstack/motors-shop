import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: ${(props) => props.theme.colors.grey0};
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 140px;
  flex-direction: column;
  @media screen and (min-width: 780px) {
    flex-direction: row;
  }
`;

export const Span = styled.span`
  font: ${(props) => props.theme.fonts["body-2-400"]};
  color: ${(props) => props.theme.colors.whiteFixed};
`;

export const Box = styled.div`
  background-color: ${(props) => props.theme.colors.grey1};
  width: 50px;
  height: 50px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.whiteFixed};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
