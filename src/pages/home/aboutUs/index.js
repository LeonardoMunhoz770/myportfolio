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
    "https://drive.google.com/u/0/uc?id=1TcHU1viOEaIHL4R-z_v4z_D_tblG6RO3&export=download";

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
              Sou formado em Análise e Desenvolvimento de Sistemas e tenho como
              objetivo profissional migrar para área de desenvolvimento. Tenho
              desenvolvido projetos de programação utilizando JavaScript. No
              momento, estou focado em aprimorar meus conhecimentos na área web,
              principalmente com ReactJS. Sou uma pessoa comunicativa e tenho
              facilidade em me adaptar aos projetos atribuídos a mim. Tenho
              habilidade em aprender rapidamente e sou curioso, sempre disposto
              a adquirir conhecimentos sobre novas tecnologias. Possuo
              experiência como Analista em uma renomada empresa de tecnologia,
              onde desempenhei diversas atividades, como manutenção de hardware
              e software, suporte aos funcionários, gerenciamento de backups e
              servidores.
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
