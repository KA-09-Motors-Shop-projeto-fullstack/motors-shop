import styled from "styled-components";

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.grey8};
  padding-top: 50px;
  padding-bottom: 190px;
`;

export const Container = styled.div`
  min-width: 343px;
  width: 30%;
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
  height: 90%;
  justify-content: space-around;
`;

export const PersonalInformation = styled.div``;

export const AddressInformation = styled.div``;

export const TypeAccount = styled.div``;
