import React from "react";
import {
  Container,
  Content,
  ContentTitle,
  Title,
  Subtitle,
  Border,
} from "./styles";

import Projects from "../../../components/projects";

import ymk from "../../../assets/ymk.webp";
import singularRealty from "../../../assets/singularRealty.webp";
import caioba from "../../../assets/caioba.webp";

const Portifolio = () => {
  const arrayProjects = [
    {
      description:
        "O Singular Realty é um site de imóveis de alto padrão, desenvolvido com ReactJS e integrado a uma API de imóveis, oferecendo uma experiência moderna e atualizada para apresentação de propriedades de luxo.",
      imageProject: singularRealty,
      titleProject: "Singular Realty",
      url: "https://singularrealty.com.br/",
    },
    {
      description:
        "O Caioba Soccer Club é um site de um evento de futebol, desenvolvido com ReactJS, integrado ao gateway de pagamento Iugu e ao CRM RD Station, facilitando inscrições, pagamentos e gestão de leads de forma eficiente.",
      imageProject: caioba,
      titleProject: "Caioba Soccer Club",
      url: "https://caiobasc.com.br/",
    },
    {
      description:
        "YMK é uma plataforma de negócios imobiliários com integração de CRM. Desenvolvi o site deles usando React e styled-components, e configurei dois formulários (para empresas e pessoas físicas) com PHPMailer para envio de informações. O site também é integrado com o CRM que a empresa utiliza, facilitando a captação de leads e o acompanhamento das interações com os clientes.",
      imageProject: ymk,
      titleProject: "YMK Agência Imobiliária",
      url: "https://ymk.com.br/",
    },
  ];

  return (
    <Container id="portifolio">
      <Content>
        <ContentTitle>
          <Title>Portifolio</Title>
          <Subtitle>Projetos Pessoais</Subtitle>
          <Border />
        </ContentTitle>
        {arrayProjects.map((project, index) => (
          <Projects
            ImageProject={project.imageProject}
            TitleProject={project.titleProject}
            Descript={project.description}
            url={project.url}
            key={index}
            alt={project.alt}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Portifolio;
