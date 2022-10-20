import styled from "styled-components";

export const Container = styled.div``;

export const ModalTitle = styled.h2`
  font: ${(props) => props.theme.fonts["heading-7-500"]};
  color: ${(props) => props.theme.colors.grey1};
`;

export const Form = styled.form`
  display: grid;
  grid-row-gap: 24px;

  padding: 18px 24px 33px 24px;

  div,
  input {
    width: 100%;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const ContainerInputs = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-column-gap: 2%;
`;
