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

const Header = ({ toggleTheme }) => {
  const handleNavClick = (event) => {
    event.preventDefault();
    const sectionId = event.target.getAttribute("href");
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

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
          </List>
        </Navigation>
      </Container>
    </HeaderPage>
  );
};

export default Header;
