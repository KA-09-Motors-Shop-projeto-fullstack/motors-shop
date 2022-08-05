import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  a {
    font: ${(props) => props.theme.fonts["body-1-600"]};
    color: ${(props) => props.theme.colors.grey2};
    cursor: pointer;
    text-decoration: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 40vw;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const Line = styled.li`
  width: 2px;
  height: 79px;
  background-color: ${(props) => props.theme.colors.grey6};
`;
