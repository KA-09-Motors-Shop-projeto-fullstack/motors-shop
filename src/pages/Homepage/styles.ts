import styled from "styled-components";
import theme from "../../styles/theme"

export const InfoNavContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 100%;
  height: 30vh;
  min-height: fit-content;

  padding: 0 25%;

  background-color: ${theme.colors.brand2};
  color: white;
  
  div {
    text-align: center;

    h2 {
      font-weight: 700;
      font-size: 2.2rem;
      line-height: 56px;
    }
    
    p {
      margin-top: 20px;

      font-weight: 400;
      font-size: 1rem;
    }
  }

  nav {
    display: flex;
    justify-content: center;

    gap: 20px;

    width: 80%;

    button {
      color: inherit;
    }
  }

  @media (max-width: 700px) {
    padding: 10px 10%;
  }
`;

export const ListsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin: 50px 0;
`;