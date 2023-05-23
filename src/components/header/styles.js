import styled from "styled-components";

export const HeaderPage = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.headerAndfooter};
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
  background-color: ${({ theme }) => theme.colors.headerAndfooter};
`;

export const ContentLogo = styled.figure`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 568px) {
    display: none;
  }
  background-color: ${({ theme }) => theme.colors.headerAndfooter};
`;

export const Logo = styled.img`
  width: 130px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.headerAndfooter};
`;

export const Navigation = styled.nav`
  @media (max-width: 470px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.headerAndfooter};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  color: ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.headerAndfooter};
  font-size: 15px;
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
  font-family: "Poppins", sans-serif;
  @media (max-width: 670px) {
    font-size: 15px;
  }
  @media (max-width: 438px) {
    font-size: 10px;
  }
  @media (max-width: 484px) {
    gap: 15px;
  }
`;

export const Sections = styled.li`
  background-color: ${({ theme }) => theme.colors.headerAndfooter};
  color: ${({ theme }) => theme.colors.title};
  cursor: pointer;
  @media (max-width: 710px) {
    font-size: 15px;
  }
  @media (max-width: 484px) {
    font-size: 12px;
  }
`;

export const Title = styled.h1`
  background-color: ${({ theme }) => theme.colors.headerAndfooter};
  color: ${({ theme }) => theme.colors.title};
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
  font-family: "Poppins", sans-serif;
`;
