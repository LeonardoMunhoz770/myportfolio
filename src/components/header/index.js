import React from "react";
import {
  HeaderPage,
  Container,
  ContentLogo,
  Navigation,
  List,
  Sections,
  Title,
} from "./styles";

import { AiFillBulb } from "react-icons/ai";
import { useTheme } from "styled-components";

const Header = ({ toggleTheme }) => {
  const handleNavClick = (event) => {
    event.preventDefault();
    const sectionId = event.target.getAttribute("href");
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  const theme = useTheme();

  return (
    <HeaderPage>
      <Container>
        <ContentLogo>
          <Title>Leonardo Munhoz</Title>
        </ContentLogo>
        <Navigation>
          <List>
            <Sections href="#home" onClick={handleNavClick}>
              Home
            </Sections>
            <Sections href="#services" onClick={handleNavClick}>
              Serviços
            </Sections>
            <Sections href="#about" onClick={handleNavClick}>
              Sobre Mim
            </Sections>
            <Sections href="#portifolio" onClick={handleNavClick}>
              Portifólio
            </Sections>
            <Sections href="#contact" onClick={handleNavClick}>
              Contato
            </Sections>
            <AiFillBulb
              style={{ cursor: "pointer" }}
              size={15}
              color={theme.colors.title}
              onClick={toggleTheme}
            />
          </List>
        </Navigation>
      </Container>
    </HeaderPage>
  );
};

export default Header;
