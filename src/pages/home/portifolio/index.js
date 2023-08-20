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
import imageLifeLab from "../../../assets/life_lab.webp";
import imageAdvLink from "../../../assets/advlink.webp";

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
        "Este é uwebsite desenvolvido para um cliente referente a um laboratório de análises clínicas, tem todas as informações da empresa, inclusive a localização da empresa no maps e o contato via instagram e whatsapp. Foi feito com Html, css e JS. ",
      imageProject: imageLifeLab,
      titleProject: "LifeLab",
      url: "https://laboratoriolifelab.com.br/",
      alt: "home page lifeLab",
    },
    {
      description:
        "Este é um aplicativo que eu realizo manutenção mensal, ele foi desenvolvido com react-native e php, além do banco de dados em mysql. Já está em produção e eu realizo ajustes e novas atualizações que o cliente solicita.",
      titleProject: "Advlink",
      imageProject: imageAdvLink,
      url: "https://play.google.com/store/apps/details?id=com.advlink",
      alt: "aplicativo de advogados",
    },
    {
      description:
        "Este projeto em desenvolvimento é um sistema completo de autenticação com o mesmo sistema do firebase, porém agora utilizando react, react-router, styled components e a api do Firebase, nele é implementado as rotas privadas e públicas, sistema de cadastro, autenticação, tudo isso utilizando o token gerado pelo firebase para cada usuário",
      imageProject: imageMunhozCompanyReact,
      titleProject: "Sistema de Autenticação",
      url: "https://munhoz-company.vercel.app/",
    },
    {
      description:
        "O projeto consiste em um formulário de cadastro de cartão de crédito desenvolvido em ReactJS, usando a biblioteca styled-components para estilização. O formulário possui campos com formatação adequada, como Número do cartão, Nome do titular, Validade e Código de segurança. Os campos são dinâmicos e obrigatórios, permitindo apenas números nos campos numéricos e apenas letras nos campos de texto. Há também um cartão ao lado do formulário que é atualizado conforme o usuário digita os dados, incluindo a identificação da bandeira do cartão com base no algoritmo de Luhn. As bandeiras de cartão validadas são Visa, Mastercard, American Express, Discover, Diners Club e Maestro.",
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
