import React, { ReactNode, useContext } from "react";
import {
  HeaderStyle,
  Ul,
  Container,
  Line,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./styles";
import Logo from "../../assets/LogoHeader.svg";
import { Link as LinkScroll } from "react-scroll";
import { NavLink, useHistory } from "react-router-dom";
import Button from "../Button";
import Avatar from "../Avatar";
import { UserContext } from "../../providers/Users";
import { UserContextType } from "../../@types/users";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { logout } from "../../services/auth";
import { formatNameToTwoWords } from "../../utils/format-name-to-two-words";

interface IPropsHeader {
  children?: ReactNode;
}

const Header: React.FC<IPropsHeader> = ({ children }) => {
  const { userLogged } = useContext(UserContext) as UserContextType;

  // Funções para rotas
  const history = useHistory();
  const goHome = () => history.push("/");
  const goSignup = () => history.push("/signup");
  const goProfile = () => history.push("/profile");

  return (
    <HeaderStyle>
      <Container>
        <img src={Logo} alt="Motors Shop" onClick={() => goHome()} />
        <nav>
          <Ul>
            <li>
              <LinkScroll
                activeClass="active"
                to="carros"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Carros
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                activeClass="active"
                to="motos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Motos
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                activeClass="active"
                to="leilão"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Leilão
              </LinkScroll>
            </li>
            <Line />
            {userLogged ? (
              <DropdownMenu.Root>
                <DropdownMenuTrigger>
                  <Avatar
                    color={userLogged.avatarColor}
                    name={userLogged.name}
                    fontSize={14}
                    size={32}
                  />
                  <h4>{formatNameToTwoWords(userLogged.name)}</h4>
                </DropdownMenuTrigger>
                <DropdownMenu.Portal>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={goProfile}>
                      Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem>Editar Perfil</DropdownMenuItem>
                    <DropdownMenuItem>Editar endereço</DropdownMenuItem>
                    <DropdownMenuItem>Minhas Compras</DropdownMenuItem>
                    <DropdownMenuItem onClick={logout}>Sair</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            ) : (
              <>
                <li>
                  <NavLink activeStyle={{ color: "#4529E6" }} to="/login">
                    Entrar
                  </NavLink>
                </li>
                <li>
                  <Button
                    onClick={goSignup}
                    typeFont="big"
                    typeButton="outline2"
                  >
                    Cadastrar
                  </Button>
                </li>
              </>
            )}
          </Ul>
        </nav>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
