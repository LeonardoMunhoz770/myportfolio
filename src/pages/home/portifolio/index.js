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
import imageMunhozCompanyReact from "../../../assets/munhozCompanyReact.webp";
import imageFormCredit from "../../../assets/formCard.webp";
import imageAdvLink from "../../../assets/advlink.webp";

const Portifolio = () => {
  const arrayProjects = [
    {
      description:
        "Esta é uma landing page criada em React, que destaca um inovador aplicativo de turismo. Desenvolvê-la aprimorou minhas habilidades em HTML, CSS, styled-components e estruturação de projetos em React.",
      imageProject: imageBegrato,
      titleProject: "Begrato Landing Page",
      url: "https://begrato-lp.vercel.app/",
      alt: "pagina de um app de fotos e videos inteligentes",
    },
    {
      description:
        "Este é um aplicativo que eu realizo manutenção mensal, ele foi desenvolvido com react-native e php, além do banco de dados em mysql. Já está em produção e eu realizo ajustes e novas atualizações que o cliente solicita.",
      titleProject: "Aplicativo ADVlink",
      imageProject: imageAdvLink,
      url: "https://play.google.com/store/apps/details?id=com.advlink",
      alt: "aplicativo de advogados",
    },
    {
      description:
        "Este projeto em desenvolvimento é um sistema completo de autenticação com o mesmo sistema do firebase, porém agora utilizando react, react-router, styled components e a api do Firebase, nele é implementado as rotas privadas e públicas, sistema de cadastro, autenticação, tudo isso utilizando o token gerado pelo firebase para cada usuário.",
      imageProject: imageMunhozCompanyReact,
      titleProject: "Sistema de Autenticação",
      url: "https://munhoz-company.vercel.app/",
    },
    {
      description:
        "Criei um formulário de registro de cartão de crédito em ReactJS com validações e reconhecimento de bandeiras de cartão (Visa, Mastercard, American Express, Discover, Diners Club e Maestro) usando styled-components.",
      imageProject: imageFormCredit,
      titleProject: "Registro de Cartão de Crédito",
      url: "https://form-credit-card-ten.vercel.app/",
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
