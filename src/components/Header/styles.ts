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
  gap: 25px;
  justify-content: space-around;
  align-items: center;
`;

export const Container = styled.div``;

export const Line = styled.li`
  width: 2px;
  height: 79px;
  background-color: ${(props) => props.theme.colors.grey6};
`;

// Estilização do menu dropdown desktop

export const DropdownMenuTriggerDesktop = styled(DropdownMenu.Trigger)`
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

export const DropdownMenuContentDesktop = styled(DropdownMenu.Content)`
  width: 200px;
  background: ${(props) => props.theme.colors.grey9};
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const DropdownMenuItemDesktop = styled(DropdownMenu.Item)`
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

// Estilização do menu dropdown mobile

export const DropdownMenuTriggerMobile = styled(DropdownMenu.Trigger)`
  background-color: transparent;
`;

export const DropdownMenuContentMobile = styled(DropdownMenu.Content)`
  width: 100vw;
  background: ${(props) => props.theme.colors.grey9};
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const DropdownMenuItemMobile = styled(DropdownMenu.Item)`
  all: "unset";
  border-radius: 4px;
  color: ${(props) => props.theme.colors.grey2};
  font: ${(props) => props.theme.fonts["body-1-600"]};
  padding: 18px 15px;
`;

// Responsividade

export const NavMobile = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavDesktop = styled.nav`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
