import React, { ReactNode } from "react";
import { HeaderStyle, Ul, Container, Line, ContainerLogged } from "./styles";
import Logo from "../../assets/LogoHeader.svg";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import Button from "../Button";
import { isAuthenticated } from "../../services/auth";
import Avatar from "../Avatar";

interface IPropsHeader {
  children?: ReactNode;
}

const Header: React.FC<IPropsHeader> = ({ children }) => {
  return (
    <HeaderStyle>
      <Container>
        <img src={Logo} alt="Motors Shop" />
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
            <li>
              <Line />
            </li>
            {isAuthenticated() ? (
              <ContainerLogged>
                <Avatar
                  color="random12"
                  name="Omar Colombari"
                  fontSize={14}
                  size={32}
                />
                <h4>Omar Colombari</h4>
              </ContainerLogged>
            ) : (
              <>
                <li>
                  <Link to="/login">Entrar</Link>
                </li>
                <li>
                  <Button typeFont="big" typeButton="outline2">
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
