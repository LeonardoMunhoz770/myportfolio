import React from "react";
import { useTheme } from "styled-components";

import {
  ContentTitle,
  Subtitle,
  Container,
  Content,
  Title,
  Border,
  ContainerContact,
  SocialMedia,
  ContainerIcon,
  ContainerInformations,
  TitleContact,
  Street,
  ContentContact,
} from "./styles";

import { AiTwotoneMail, AiFillEnvironment } from "react-icons/ai";

const Contact = () => {
  const theme = useTheme();

  return (
    <Container id="contact">
      <Content>
        <ContentTitle>
          <Title>Contato</Title>
          <Subtitle>Redes para contato</Subtitle>
          <Border></Border>
        </ContentTitle>
        <ContainerContact>
          <SocialMedia>
            <ContentContact>
              <ContainerIcon>
                <AiTwotoneMail color={theme.colors.subtitle} size={50} />
              </ContainerIcon>
              <ContainerInformations>
                <TitleContact>Email</TitleContact>
                <Street>munhozleonardo756@gmail.com</Street>
              </ContainerInformations>
            </ContentContact>
            <ContentContact>
              <ContainerIcon>
                <AiFillEnvironment color={theme.colors.subtitle} size={50} />
              </ContainerIcon>
              <ContainerInformations>
                <TitleContact>Localização</TitleContact>
                <Street>São Paulo, SP - Brasil</Street>
              </ContainerInformations>
            </ContentContact>
          </SocialMedia>
        </ContainerContact>
      </Content>
    </Container>
  );
};

export default Contact;
