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
import imageBegrato from "../../../assets/begreatoLp.webp";
import ymk from "../../../assets/ymk.webp";
import imageUrblar from "../../../assets/urblar.webp";
import imageRealEstate from "../../../assets/realestate.webp";

const Portifolio = () => {
  const arrayProjects = [
    {
      description:
        "Esta landing page apresenta o aplicativo de turismo chamado Begrato, projetado para registrar e destacar lugares turísticos. Desenvolvida em React e estilizada com styled-components, a página oferece uma visão clara e atraente do aplicativo. É totalmente responsiva, garantindo uma experiência de navegação excelente em qualquer dispositivo.",
      imageProject: imageBegrato,
      titleProject: "Begrato Landing Page",
      url: "https://begrato-lp.vercel.app/",
      alt: "pagina de um app de fotos e videos inteligentes",
    },
    {
      description:
        "Esta landing page de apresentação foi desenvolvida com React e styled-components para estilização, destacando a empresa Urblar. Urblar é a maior plataforma de imóveis econômicos na Capital e Grande São Paulo, oferecendo opções novas, em construção ou prontas, parceira de todas as incorporadoras da região. Encontre o imóvel ideal com condições que cabem no seu bolso na Urblar.",
      imageProject: imageUrblar,
      titleProject: "Landing Page Urblar",
      url: "https://urblar.com.br",
    },
    {
      description:
        "YMK é uma plataforma de negócios imobiliários com integração de CRM. Desenvolvi o site deles usando React e styled-components, e configurei dois formulários (para empresas e pessoas físicas) com PHPMailer para envio de informações. O site também é integrado com o CRM que a empresa utiliza, facilitando a captação de leads e o acompanhamento das interações com os clientes.",
      imageProject: ymk,
      titleProject: "YMK Agência Imobiliária",
      url: "https://ymk.com.br/",
    },

    {
      description:
        "Realestate4me é um site desenvolvido em ReactJS para a empresa do ramo imobiliário onde presto serviços. Ele oferece uma plataforma de pesquisa de imóveis internacionais, integrando um iframe que renderiza a API do site Newestateonly. Os usuários podem realizar buscas filtradas diretamente no site, facilitando a busca por propriedades em diferentes países.",
      titleProject: "RealEstate4.me",
      imageProject: imageRealEstate,
      url: "https://realestate4me.com.br/",
      alt: "site de imobiliária",
    },
  ];

  return (
    <Container id="portifolio">
      <Content>
        <ContentTitle>
          <Title>Portifolio</Title>
          <Subtitle>Projetos Pessoais</Subtitle>
          <Border></Border>
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
