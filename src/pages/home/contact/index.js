import React from "react";
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

import {
  AiOutlineWhatsApp,
  AiTwotoneMail,
  AiFillEnvironment,
} from "react-icons/ai";
import { useTheme } from "styled-components";

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
                <AiOutlineWhatsApp color={theme.colors.subtitle} size={50} />
              </ContainerIcon>
              <ContainerInformations>
                <TitleContact>WhatsApp</TitleContact>
                <Street>11 94850-3682 </Street>
              </ContainerInformations>
            </ContentContact>
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
