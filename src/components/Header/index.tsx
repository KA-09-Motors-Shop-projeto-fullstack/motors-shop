import React, { ReactNode, useContext } from "react";
import { HeaderStyle, Ul, Container, Line, ContainerLogged } from "./styles";
import Logo from "../../assets/LogoHeader.svg";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import Button from "../Button";
import { isAuthenticated } from "../../services/auth";
import Avatar from "../Avatar";
import { UserContext } from "../../providers/Users";
import { UserContextType } from "../../@types/users";

interface IPropsHeader {
  children?: ReactNode;
}

const Header: React.FC<IPropsHeader> = ({ children }) => {
  const { user } = useContext(UserContext) as UserContextType;

  const history = useHistory();
  const goHome = () => history.push("/");
  const goSignup = () => history.push("/signup");

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
            {user ? (
              <ContainerLogged>
                <Avatar
                  color={user.avatarColor}
                  name={user.name}
                  fontSize={14}
                  size={32}
                />
                <h4>{user.name}</h4>
              </ContainerLogged>
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
