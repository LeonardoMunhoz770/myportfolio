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
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 639px) {
    justify-content: center;
    align-items: center;
  }
  margin-bottom: 20px;
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
