import styled from "styled-components";

export const ButtonContainer = styled.button`
  color: ${({ theme }) => theme.colors.titleButton};
  font-size: 15px;
  background-color: ${({ theme }) => theme.colors.subtitle};
  border-radius: 2px;
  transition: all 0.5s;
  border: 10px solid transparent;
  cursor: pointer;
  :hover {
    border: 10px solid ${({ theme }) => theme.colors.subtitle};
    border-radius: 20px;
  }
`;
