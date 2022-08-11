import styled from "styled-components";

export const ContainerInformations = styled.section`
  background-color: ${(props) => props.theme.colors.grey10};
  position: absolute;
  top: 140px;
  left: 0;
  right: 0;
  padding: 30px;
  width: 90%;
  margin: 0 auto;
  height: 406px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-radius: 4px;
`;

export const NameUser = styled.span`
  font: ${(props) => props.theme.fonts["heading-6-600"]};
  color: ${(props) => props.theme.colors.grey1};
`;

export const DescriptionUser = styled.p`
  font: ${(props) => props.theme.fonts["body-1-400"]};
  color: ${(props) => props.theme.colors.grey2};
`;

export const Rectangle = styled.div`
  width: 100%;
  height: 500px;
`;

export const White = styled.div``;

export const Roxo = styled.div`
  background-color: ${(props) => props.theme.colors.brand1};
  height: 50%;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;
