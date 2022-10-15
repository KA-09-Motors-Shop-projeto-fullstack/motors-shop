import styled from "styled-components";

export const Main = styled.main``;

export const InfoNavContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  min-height: fit-content;
  padding: 5% 25%;
  background-color: ${(props) => props.theme.colors.brand2};
  color: white;

  div {
    text-align: center;

    h2 {
      font: ${(props) => props.theme.fonts["heading-1-700"]};
      line-height: 56px;
    }

    p {
      margin-top: 20px;
      font: ${(props) => props.theme.fonts["body-1-400"]};
    }
  }

  nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 80%;

    button {
      color: inherit;
      width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 10px;
    nav {
      flex-direction: column;
      width: 100%;
    }
  }
`;

export const ListsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin: 50px 0;
`;
