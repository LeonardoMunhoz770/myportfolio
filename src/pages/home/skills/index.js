import React from "react";
import {
  Container,
  Content,
  ContentTitle,
  Title,
  Subtitle,
  Border,
  Qualifications,
  Quality,
  QualificationsWrapper,
  LineTwo,
  ContentFigure,
  Description,
  TitleQuality,
} from "./styles";

import ImageLineOne from "../../../assets/lineTwo.webp";

import {
  AiFillGithub,
  AiOutlineGlobal,
  AiOutlineConsoleSql,
} from "react-icons/ai";

import { BsPhoneFill, BsWrench, BsServer } from "react-icons/bs";

const Skills = () => {
  return (
    <Container id="services">
      <Content>
        <ContentTitle>
          <Title>Serviços</Title>
          <Subtitle>Habilidades</Subtitle>
          <Border></Border>
        </ContentTitle>
        <Qualifications>
          <QualificationsWrapper>
            <Quality>
              <ContentFigure>
                <AiFillGithub color="#277ac0" size={50} />
              </ContentFigure>
              <TitleQuality>Versionamento de Git</TitleQuality>
              <Description>
                Conhecimentos nos principais comandos básicos de git para
                criação de repositório, trocar de branch, verificar status,
                commitar, clonar o repositório, enviar alterações e baixar as
                alterações do repositório.
              </Description>
            </Quality>
            <Quality>
              <ContentFigure>
                <AiOutlineGlobal color="#277ac0" size={50} />
              </ContentFigure>
              <TitleQuality>Desenvolvimento Web</TitleQuality>
              <Description>
                Conhecimentos em Desenvolvimento web com as tecnologias HTML,
                CSS E JS, além de conhecimentos no framework React. Já
                desenvolvi projetos em React e em JS puro.
              </Description>
            </Quality>
            <Quality>
              <ContentFigure>
                <BsPhoneFill color="#277ac0" size={50} />
              </ContentFigure>
              <TitleQuality>Desenvolvimento Mobile</TitleQuality>
              <Description>
                Conhecimentos básicos em react-native, com um projeto
                profissional realizado utilizando as principais metodologias de
                clean code.
              </Description>
            </Quality>
            <Quality>
              <ContentFigure>
                <BsWrench color="#277ac0" size={50} />
              </ContentFigure>
              <TitleQuality>Manutenção Software/Hardware</TitleQuality>
              <Description>
                Manutenção e configuração de hardware e software, experiência de
                2 anos na área de infraestrutura e suporte de TI
              </Description>
            </Quality>
            <Quality>
              <ContentFigure>
                <BsServer color="#277ac0" size={50} />
              </ContentFigure>
              <TitleQuality>Servidor</TitleQuality>
              <Description>
                Gerenciamento de backups, Active Directory, configurações
                básicas de GPO, criação e edição de users. Conhecimentos nas
                principais ferramentas de Remote Desktop.
              </Description>
            </Quality>
            <Quality>
              <ContentFigure>
                <AiOutlineConsoleSql color="#277ac0" size={50} />
              </ContentFigure>
              <TitleQuality>Noções gerais de uso</TitleQuality>
              <Description>
                Tenho um pouco de noção de banco de dados com SQL e de Back-end
                com Node.js, meu tcc foi desenvolvido usando todas essas
                tecnologias
              </Description>
            </Quality>
          </QualificationsWrapper>
          <LineTwo
            src={ImageLineOne}
            alt="Icone com 3 esferas e a numero 2 preenchida."
          />
        </Qualifications>
      </Content>
    </Container>
  );
};

export default Skills;
