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

export const ContainerAboutUs = styled.div`
  background-color: red;
  width: 100%;
  margin-top: 20px;
`;

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Description = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.colors.title};
  line-height: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundContainer};
  padding: 20px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 653px) {
    height: 100%;
  }
  flex-direction: column;
  gap: 20px;
`;

export const LineTrhee = styled.img`
  width: 30px;
  height: 100%;
  margin-left: 10px;
  @media (max-width: 697px) {
    display: none;
  }
`;

export const Curriculum = styled.iframe`
  display: none;
`;
