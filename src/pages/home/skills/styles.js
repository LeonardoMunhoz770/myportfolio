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
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 30px;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
  font-family: "Poppins", sans-serif;
`;

export const Border = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100px;
  height: 5px;
`;

export const Qualifications = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

export const QualificationsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 639px) {
    justify-content: center;
  }
`;

export const Quality = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: calc(33.33% - 20px);
  height: 250px;
  border-radius: 2px;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    width: 300px;
  }
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  display: flex;
  gap: 10px;
  @media (max-width: 1090px) {
    justify-content: flex-start;
    gap: 5px;
  }
  @media (max-width: 941px) {
    justify-content: center;
    gap: 10px;
  }
`;

export const LineTwo = styled.img`
  width: 30px;
  height: 100%;
  margin-left: 10px;
  @media (max-width: 697px) {
    display: none;
  }
`;

export const ContentFigure = styled.figure`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0px 20px;
`;

export const ImageQuality = styled.img``;

export const TitleQuality = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0px 20px;
`;

export const Description = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0px 20px;
  font-size: 14px;
  line-height: 15px;
`;
