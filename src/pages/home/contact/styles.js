import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 150px;
`;

export const Content = styled.section`
  width: 70%;
  height: 100%;
  @media (max-width: 941px) {
    width: 100%;
    padding: 20px 20px;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 639px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 25px;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
  font-family: "Poppins", sans-serif;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 30px;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
  font-family: "Poppins", sans-serif;
`;

export const Border = styled.div`
  background-color: ${({ theme }) => theme.colors.subtitle};
  width: 100px;
  height: 5px;
`;

export const ContainerContact = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 25px;
`;
export const SocialMedia = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 628px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerIcon = styled.figure``;

export const ContainerInformations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const TitleContact = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 20px;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
  font-family: "Poppins", sans-serif;
`;

export const Street = styled.p`
  color: ${({ theme }) => theme.colors.title};
  font-size: 15px;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
  font-family: "Poppins", sans-serif;
  width: 100%;
`;

export const ContentContact = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 15px;
  width: 100%;
`;
