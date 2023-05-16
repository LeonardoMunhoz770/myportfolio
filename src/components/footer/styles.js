import styled from "styled-components";

export const FooterPage = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.title};
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap");
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  gap: 20px;
`;

export const ContentContact = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
