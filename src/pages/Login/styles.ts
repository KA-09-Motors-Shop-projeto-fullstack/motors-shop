import styled from "styled-components";

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.grey8};
  padding-top: calc(82px + 50px);
  padding-bottom: 190px;
`;

export const Container = styled.div`
  min-width: 343px;
  width: 30%;
  height: 594px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.whiteFixed};
  h2 {
    font: ${(props) => props.theme.fonts["heading-5-500"]};
    align-self: flex-start;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 90%;
  justify-content: space-around;
  span {
    font: ${(props) => props.theme.fonts["body-2-500"]};
    color: ${(props) => props.theme.colors.grey2};
    align-self: flex-end;
    :last-of-type {
      font: ${(props) => props.theme.fonts["body-2-400"]};
      align-self: center;
    }
  }
  button,
  input {
    width: 100%;
  }
  div {
    &:nth-child(2),
    &:nth-child(3) {
      width: 100%;
    }
  }
`;
