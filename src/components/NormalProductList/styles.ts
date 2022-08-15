import styled from "styled-components"
import theme from "../../styles/theme"

export const Container = styled.div`
  width: 100%;

  h2 {
    font: ${theme.fonts["heading-4-600"]};
    font-size: 24px;
    margin-bottom: 50px;
    padding-left: 20px;
  }

  ul{
    display: flex;
    gap: 30px;
    overflow: auto;
    margin: 0;
    padding: 0;
    padding-bottom: 15px;
    padding-left: 20px;
  }
`;