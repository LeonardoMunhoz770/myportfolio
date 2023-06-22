import React from "react";
import {
  Container,
  Description,
  Title,
  Subtitle,
  OneSection,
  ImageSection,
  ContentText,
} from "./styles";
import lineOne from "../../../assets/lineOne.webp";

const Apresentation = () => {
  return (
    <Container id="home">
      <Description>
        <ContentText>
          <Title>Olá, eu sou um Desenvolvedor Front-end</Title>
          <Subtitle>
            Gosto de criar designs de aplicativos da web e trazê-los à vida
            usando código e desenvolver designs responsivos.
          </Subtitle>
        </ContentText>
        <OneSection>
          <ImageSection
            src={lineOne}
            alt="Icone com 3 esferas e a numero 1 preenchida."
          />
        </OneSection>
      </Description>
    </Container>
  );
};

export default Apresentation;
