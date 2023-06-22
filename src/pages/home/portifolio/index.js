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
import imageOrganograma from "../../../assets/valorant.webp";
import imageMunhozCompany from "../../../assets/munhozCompany.webp";
import imageMunhozCompanyReact from "../../../assets/munhozCompanyReact.webp";

const Portifolio = () => {
  const arrayProjects = [
    {
      description:
        "Esta é uma landing page desenvolvida com React, ela não apenas apresenta um aplicativo de turismo inovador, mas também me permitiu aprimorar minhas habilidades em HTML, CSS e styled-components, além de aprender conceitos importantes de clean code e estruturação de projetos em React. Com o aplicativo apresentado na landing page, os usuários podem registrar seus momentos, descobrir novos lugares e ver fotos reais dos locais sem a necessidade de seguir ou conhecer outras pessoas. Eu convido você a dar uma olhada e conferir tudo o que aprendi!",
      imageProject: imageBegrato,
      titleProject: "Begrato Landing Page",
      url: "https://begrato-lp.vercel.app/",
      alt: "pagina de um app de fotos e videos inteligentes",
    },
    {
      description:
        "Um organograma é um tipo de diagrama que representa a estrutura hierárquica de uma organização ou empresa. Ele mostra as relações e a distribuição de autoridade, responsabilidade e comunicação entre os diferentes cargos e departamentos. Neste caso, eu escolhi um tema de algo que eu gosto que é o jogo Valorant, para que ele crie cards de acordo com as classes dos personagens do jogo. Foi utilizado React em sintonia com o curso da Alura.",
      imageProject: imageOrganograma,
      titleProject: "Organograma Valorant",
      url: "https://organograma-valorant.vercel.app/",
      alt: "pagina de um organograma com o tema do jogo valorant",
    },
    {
      description:
        "Este projeto foi feito com a intenção de aprender a integração com firebase e todos os métodos de autenticação, seja ela com o google ou senha, e também o reset de senha utilizando um link enviado para o e-mail do usuário. Ele possui tela de login, de registro e um modal para reset de senha caso esqueça. Foi desenvolvido utilizando somente JavaScript com a integração com o banco de dados do Firebase.",
      imageProject: imageMunhozCompany,
      titleProject: "MunhozCompany Firebase",
      url: "https://munhoz-project.vercel.app/",
      alt: "tela de login e senha com o tema MunhozCompany",
    },
    {
      description:
        "Este projeto em desenvolvimento é um sistema completo de autenticação com o mesmo sistema do firebase, porém agora utilizando react, react-router, styled components e a api do Firebase, nele é implementado as rotas privadas e públicas, sistema de cadastro, autenticação, tudo isso utilizando o token gerado pelo firebase para cada usuário",
      imageProject: imageMunhozCompanyReact,
      titleProject: "Sistema de Autenticação",
      url: "https://munhoz-company.vercel.app/",
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
