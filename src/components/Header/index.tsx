import React, { ReactNode } from "react";
import { HeaderStyle, Ul, Container } from "./styles";
import Logo from "../../assets/Logo.svg";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import Button from "../Button";

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
              <Button typeFont="big" typeButton="outline2">
                Cadastrar
              </Button>
            </li>
          </Ul>
        </nav>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
