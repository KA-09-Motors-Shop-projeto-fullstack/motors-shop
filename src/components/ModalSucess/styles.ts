import styled from "styled-components";

export const Container = styled.div``;

export const ModalTitle = styled.h2`
  font: ${(props) => props.theme.fonts["heading-7-500"]};
  color: ${(props) => props.theme.colors.grey1};
`;

export const ParagraphOne = styled.p`
  font: ${(props) => props.theme.fonts["heading-7-500"]};
  color: ${(props) => props.theme.colors.grey1};
`;

export const ParagraphTwo = styled.p`
  font: ${(props) => props.theme.fonts["body-1-400"]};
  color: ${(props) => props.theme.colors.grey2};
`;
