import React from "react";
import { Box, FooterStyle, Span } from "./styles";
import Logo from "../../assets/LogoFooter.svg";
import { FaAngleUp } from "react-icons/fa";
import { animateScroll } from "react-scroll";

const Footer: React.FC = () => {
  const scrollToTop = animateScroll.scrollToTop;

  return (
    <FooterStyle>
      <img src={Logo} alt="Motors Shop" />
      <Span>© 2022 - Todos os direitos reservados.</Span>
      <Box onClick={() => scrollToTop()}>
        <FaAngleUp />
      </Box>
    </FooterStyle>
  );
};

export default Footer;
