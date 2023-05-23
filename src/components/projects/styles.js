import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: red;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.backgroundContainer};
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1341px) {
    flex-direction: column;
  }

  padding: 50px 0px 50px 0px;
`;

export const ContentImageProject = styled.figure`
  height: 100%;
  width: 50%;
  border-radius: 20px;
`;

export const ContentInformationsProject = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundContainer};
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  gap: 10px;
  @media (max-width: 1341px) {
    width: 90%;
  }
  @media (max-width: 574px) {
    padding: 10px 10px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  width: 50%;
  background-color: ${({ theme }) => theme.colors.backgroundContainer};
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: "Abel", sans-serif;
  font-size: 20px;
  font-weight: bold;

  @import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");
  @media (max-width: 1341px) {
    width: 100%;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.title};
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${({ theme }) => theme.colors.backgroundContainer};
  font-family: "Abel", sans-serif;
  @import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");
  font-size: 15px;
  line-height: 17px;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;
