import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const HeaderStyle = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  padding: 0 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid ${(props) => props.theme.colors.grey6};

  nav {
    height: 100%;
  }

  background: ${(props) => props.theme.colors.whiteFixed};
  a {
    font: ${(props) => props.theme.fonts["body-1-600"]};
    color: ${(props) => props.theme.colors.grey2};
    cursor: pointer;
    text-decoration: none;
  }
  img {
    cursor: pointer;
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: space-around;
  width: 40vw;
  align-items: center;
`;

export const Container = styled.div``;

export const Line = styled.li`
  width: 2px;
  height: 79px;
  background-color: ${(props) => props.theme.colors.grey6};
`;

// Estilização do menu dropdown

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 180px;
  background-color: transparent;
  h4 {
    color: ${(props) => props.theme.colors.grey2};
    font: ${(props) => props.theme.fonts["body-1-400"]};
    margin-bottom: 0;
  }

  &:focus {
    outline: none;
  }
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  width: 200px;
  background: ${(props) => props.theme.colors.grey9};
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const DropdownMenuItem = styled(DropdownMenu.Item)`
  all: "unset";
  border-radius: 4px;

  color: ${(props) => props.theme.colors.grey2};
  font: ${(props) => props.theme.fonts["body-1-400"]};
  padding: 12px 15px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey7};
  }

  &:focus {
    outline: none;
  }
`;
