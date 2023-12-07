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
import imageFormCredit from "../../../assets/formCard.webp";
import imageAdvLink from "../../../assets/advlink.webp";
import imageLPTA from "../../../assets/lpta.webp";

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
        "Esta é um site desenvolvido para a empresa em que eu presto serviços, foi desenvolvido com React e o backend para o envio de formulários foi feito com PHP.",
      imageProject: ymk,
      titleProject: "YMK Agência Imobiliária",
      url: "https://ymk-nine.vercel.app/",
    },
    {
      description:
        "Esta é um site desenvolvido para um cliente da empresa que eu presto serviço, foi desenvolvido com reactJS",
      titleProject: "LPTA Facilities",
      imageProject: imageLPTA,
      url: "https://play.google.com/store/apps/details?id=com.advlink",
      alt: "site de servicos",
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
