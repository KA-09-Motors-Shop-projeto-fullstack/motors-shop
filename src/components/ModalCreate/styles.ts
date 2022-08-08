import styled from "styled-components";

export const Container = styled.div``;

export const ModalTitle = styled.h2`
  font: ${(props) => props.theme.fonts["heading-7-500"]};
  color: ${(props) => props.theme.colors.grey1};
`;

export const Title = styled.p`
  font: ${(props) => props.theme.fonts["body-2-500"]};
  color: black;
`;

export const TypeContainer = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    button {
      width: 49%;
    }
  }
  margin-bottom: 30px;
`;

export const InformationContainer = styled.div`
  input {
    height: 25px;
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  input {
    width: 100%;
  }
`;

export const ContainerSpecifications = styled.div`
  input {
    width: 90%;
  }
  display: flex;
  justify-content: space-evenly;
`;

export const VehicleTypeContainer = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    button {
      width: 49%;
    }
  }
`;

export const ImagesRegisterContainer = styled.div`
  button {
    padding: 10px 28px;
    margin-top: 25px;
  }
`;
