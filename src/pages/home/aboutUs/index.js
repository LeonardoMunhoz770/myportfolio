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
    "https://drive.google.com/u/0/uc?id=1e_IddnwyjyipuCORN9isKWdpWZ5_B1xh&export=download";

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
              Meu nome é Leonardo Munhoz, tenho 21 anos e estou no último
              semestre do curso de Análise e Desenvolvimento de Sistemas na
              Universidade Cruzeiro do Sul. Durante minha trajetória, adquiri
              experiência como técnico de informática em duas empresas,
              incluindo uma empresa renomada no setor de infraestrutura. No
              entanto, estou atualmente focado em me aprimorar na área de
              desenvolvimento front-end. Estou empenhado nos estudos e no
              aperfeiçoamento das minhas habilidades de programação, buscando
              adquirir conhecimentos sólidos para ingressar na área de
              desenvolvimento front-end. Estou entusiasmado com as
              possibilidades que essa área oferece e estou determinado a me
              tornar um profissional competente e inovador nesse campo.
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
