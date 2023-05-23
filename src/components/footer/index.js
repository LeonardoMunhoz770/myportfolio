import React from "react";
import { FooterPage, ContentContact } from "./styles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useTheme } from "styled-components";

const Footer = () => {
  const theme = useTheme();
  return (
    <FooterPage>
      <>&#169; Leonardo Munhoz. Todos direitos reservados.</>
      <ContentContact>
        <a
          href="https://www.linkedin.com/in/leonardo-munhoz-5b63721b7/"
          style={{
            backgroundColor: theme.colors.headerAndfooter,
          }}
          target="__blank"
        >
          <AiFillLinkedin size={25} color={theme.colors.subtitle} />
        </a>
        <a
          href="https://github.com/LeonardoMunhoz770"
          style={{
            backgroundColor: theme.colors.headerAndfooter,
          }}
          target="__blank"
        >
          <AiFillGithub size={25} color={theme.colors.subtitle} />
        </a>
      </ContentContact>
    </FooterPage>
  );
};

export default Footer;
