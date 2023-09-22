import React from "react";
import {
  Container,
  Content,
  ContentTitle,
  Title,
  Subtitle,
  Border,
  ContainerAboutUs,
  ContentDescription,
  Description,
  LineTrhee,
  Curriculum,
} from "./styles";

import LineTree from "../../../assets/lineThree.webp";
import Button from "../../../components/button";
import { useState } from "react";

const AboutUs = () => {
  const urlCV =
    "https://drive.google.com/u/0/uc?id=1nVn0S6FuTuemrdAECxCr5BKpEHfGKok_&export=download";

  const [download, setDownload] = useState("");

  return (
    <Container id="about">
      <Content>
        <ContentTitle>
          <Title>Sobre Mim</Title>
          <Subtitle>Resumo</Subtitle>
          <Border></Border>
        </ContentTitle>
        <ContainerAboutUs>
          <ContentDescription>
            <Description>
              Sou formado em Análise e Desenvolvimento de Sistemas. Tenho
              experiência em projetos de programação, com foco em JavaScript,
              particularmente no uso do ReactJS, e conhecimento em tecnologias
              de backend, como PHP Laravel e bancos de dados MySQL. Minhas
              habilidades incluem JavaScript, HTML, CSS e ReactJS, e minha
              capacidade de adaptação e aprendizado rápido me permitem
              contribuir efetivamente para diversos projetos.
              <Button
                width={150}
                onClick={() => {
                  setDownload(urlCV);
                }}
              >
                Download CV
                <Curriculum src={download}></Curriculum>
              </Button>
            </Description>
            <LineTrhee
              src={LineTree}
              alt="Icone com 3 esferas e a numero 3 preenchida."
            />
          </ContentDescription>
        </ContainerAboutUs>
      </Content>
    </Container>
  );
};

export default AboutUs;
