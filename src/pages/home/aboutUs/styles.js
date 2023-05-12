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
  color: white;
  font-size: 25px;
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
`;

export const Subtitle = styled.p`
  color: #277ac0;
  font-size: 30px;
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
`;

export const Border = styled.div`
  background-color: #277ac0;
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
  font-family: "Roboto", sans-serif;
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  color: white;
  line-height: 20px;
  background-color: #2b2d41;
  padding: 20px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 653px) {
    height: 100%;
  }
`;

export const LineTrhee = styled.img`
  width: 30px;
  height: 100%;
  margin-left: 10px;
  @media (max-width: 697px) {
    display: none;
  }
`;
