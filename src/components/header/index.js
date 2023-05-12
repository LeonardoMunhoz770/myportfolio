import React from "react";
import {
  HeaderPage,
  Container,
  ContentLogo,
  Logo,
  Navigation,
  List,
  Sections,
  Home,
  Services,
} from "./styles";

import logoLeo from "../../assets/logoLeoDev.png";
const Header = () => {
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
          <Logo src={logoLeo} />
        </ContentLogo>
        <Navigation>
          <List>
            <Sections>
              <Home href="#home" onClick={handleNavClick}>
                Home
              </Home>
            </Sections>
            <Sections>
              <Services href="#services" onClick={handleNavClick}>
                Serviços
              </Services>
            </Sections>
            <Sections>Sobre Mim</Sections>
            <Sections>Skills</Sections>
            <Sections>Portifólio</Sections>
            <Sections>Contato</Sections>
          </List>
        </Navigation>
      </Container>
    </HeaderPage>
  );
};

export default Header;
