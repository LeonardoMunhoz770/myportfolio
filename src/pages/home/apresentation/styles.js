import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 500px;
  margin-bottom: 50px;
`;

export const Description = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 70%;
  margin: 50px 50px;

  @media (max-width: 941px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 0px 0px;
    width: 100%;
  }
`;

export const ContentText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 941px) {
    width: 100%;
    margin: 20px 20px;
  }

  @media (max-width: 639px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.colors.title};
  font-size: 50px;
  max-width: 450px;
  width: 100%;
  line-height: 50px;

  @media (max-width: 639px) {
    width: 100%;

    text-align: center;
    margin: 0 auto;
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.colors.title};
  width: 450px;
  font-size: 17px;
  margin-bottom: 10px;
  line-height: 20px;

  @media (max-width: 639px) {
    width: 100%;
  }
`;

export const OneSection = styled.figure`
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;

  @media (max-width: 941px) {
    margin-right: 20px;
  }

  @media (max-width: 697px) {
    display: none;
  }
`;

export const ImageSection = styled.img`
  width: 30px;
`;
