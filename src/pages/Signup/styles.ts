import styled from "styled-components";

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.grey8};
  padding-top: calc(82px + 50px);
  padding-bottom: calc(140px + 50px);
`;

export const Container = styled.div`
  min-width: 343px;
  width: 30%;
  height: 1630px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.whiteFixed};
  h2 {
    font: ${(props) => props.theme.fonts["heading-5-500"]};
    align-self: flex-start;
  }
  h3 {
    font: ${(props) => props.theme.fonts["body-2-500"]};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100%;
  justify-content: space-around;
  div,
  input,
  .confirmButton {
    width: 100%;
  }
`;

export const PersonalInformation = styled.div``;

export const AddressInformation = styled.div``;

export const TypeAccount = styled.div`
  display: flex;
  justify-content: space-between;
`;
