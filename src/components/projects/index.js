import React from "react";
import {
  Container,
  ContentImageProject,
  ContentInformationsProject,
  Title,
  Description,
  ProjectImage,
} from "./styles";

import Button from "../button";
import { useTheme } from "styled-components";

const Projects = ({
  Descript,
  ImageProject,
  TitleProject,
  url = "",
  alt = "",
}) => {
  const theme = useTheme();

  return (
    <Container>
      <ContentImageProject>
        <ProjectImage src={ImageProject} alt={alt} />
      </ContentImageProject>
      <ContentInformationsProject>
        <Title>{TitleProject}</Title>
        <Description>{Descript}</Description>
        <Button width={150}>
          <a
            href={url}
            style={{
              backgroundColor: "transparent",
              color: theme.colors.titleButton,
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            target="__blank"
          >
            Acesse
          </a>
        </Button>
      </ContentInformationsProject>
    </Container>
  );
};

export default Projects;
