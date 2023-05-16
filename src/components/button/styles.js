import styled from "styled-components";

export const ButtonContainer = styled.button`
  color: ${({ theme }) => theme.colors.title};
  font-size: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;
