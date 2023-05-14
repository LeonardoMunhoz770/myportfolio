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

const Projects = ({
  Descript = "lorem opsum",
  ImageProject,
  TitleProject = "lorem opsum",
  url = "",
}) => {
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
              color: "white",
              textDecoration: "none",
            }}
            target="__blank"
          >
            Veja você mesmo!
          </a>
        </Button>
      </ContentInformationsProject>
    </Container>
  );
};

export default Projects;
