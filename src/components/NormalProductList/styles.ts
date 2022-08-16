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
    padding: 0 20px 20px 20px;

    scrollbar-color: #888 #f1f1f1;
    scrollbar-width: 5px;

    

    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.brand1};
    }
  }


`;