import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({ children, width = "100%", height = 36, onClick }) => {
  return (
    <ButtonContainer style={{ width: width, height: height }} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
