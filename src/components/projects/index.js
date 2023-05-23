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
  Descript = "lorem opsum",
  ImageProject,
  TitleProject = "lorem opsum",
  url = "",
}) => {
  const theme = useTheme();

  return (
    <Container>
      <ContentImageProject>
        <ProjectImage src={ImageProject} />
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
