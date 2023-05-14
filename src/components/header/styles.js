import styled from "styled-components";

export const HeaderPage = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #212336;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  width: 70%;
  margin: 50px 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  @media (max-width: 568px) {
    flex-direction: column;
  }
  @media (max-width: 941px) {
    width: 100%;
    margin: 0px 0px;
    justify-content: space-around;
  }
  background-color: #212336;
`;

export const ContentLogo = styled.figure`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 568px) {
    display: none;
  }
  background-color: #212336;
`;

export const Logo = styled.img`
  width: 130px;
  height: 100%;
  background-color: #212336;
`;

export const Navigation = styled.nav``;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  color: white;
  background-color: #212336;
  font-size: 15px;
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
  @media (max-width: 670px) {
    font-size: 15px;
  }
  @media (max-width: 438px) {
    font-size: 10px;
  }
`;

export const Sections = styled.li`
  background-color: #212336;
  cursor: pointer;
`;

export const Home = styled.a`
  color: white;
  text-decoration: none;
  background-color: #212336;
`;

export const Services = styled.a`
  color: white;
  text-decoration: none;
  background-color: #212336;
`;

export const Title = styled.h1`
  background-color: #212336;
  color: white;
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
`;
