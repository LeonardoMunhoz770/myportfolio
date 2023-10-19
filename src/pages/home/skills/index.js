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
import { useTheme } from "styled-components";

const Skills = () => {
  const theme = useTheme();

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
                <AiOutlineGlobal color={theme.colors.subtitle} size={50} />
              </ContentFigure>
              <TitleQuality>Desenvolvimento Web</TitleQuality>
              <Description>
                Desenvolvimento Web com foco em HTML, CSS, JavaScript e React.
                Experiência com projetos em React e JavaScript puro.
              </Description>
            </Quality>
            <Quality>
              <ContentFigure>
                <BsPhoneFill color={theme.colors.subtitle} size={50} />
              </ContentFigure>
              <TitleQuality>Desenvolvimento Mobile</TitleQuality>
              <Description>
                Desenvolvimento Mobile com React Native.Criação de aplicativos
                móveis para diversas plataformas, como iOS e Android.
              </Description>
            </Quality>
            <Quality>
              <ContentFigure>
                <AiFillGithub color={theme.colors.subtitle} size={50} />
              </ContentFigure>
              <TitleQuality>Versionamento de Git</TitleQuality>
              <Description>
                Domínio dos principais comandos básicos do Git para criar
                repositórios, alternar entre branches, verificar status, efetuar
                commits, clonar repositórios, enviar modificações e sincronizar
                com as atualizações do repositório.
              </Description>
            </Quality>

            <Quality>
              <ContentFigure>
                <AiOutlineConsoleSql color={theme.colors.subtitle} size={50} />
              </ContentFigure>
              <TitleQuality>Noções gerais de uso</TitleQuality>
              <Description>
                Conhecimentos sólidos nos fundamentos de PHP com Laravel para
                desenvolvimento backend, juntamente com MySQL para a construção
                de bancos de dados relacionais.
              </Description>
            </Quality>
            <Quality>
              <ContentFigure>
                <BsWrench color={theme.colors.subtitle} size={50} />
              </ContentFigure>
              <TitleQuality>Manutenção Software/Hardware</TitleQuality>
              <Description>
                Manutenção e configuração de hardware e software, experiência de
                2 anos na área de infraestrutura e suporte de TI.
              </Description>
            </Quality>
            <Quality>
              <ContentFigure>
                <BsServer color={theme.colors.subtitle} size={50} />
              </ContentFigure>
              <TitleQuality>Servidor</TitleQuality>
              <Description>
                Gerenciamento de backups, Active Directory, configurações
                básicas de GPO, criação e edição de users. Conhecimentos nas
                principais ferramentas de Remote Desktop.
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
