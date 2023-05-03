import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({ children, width = "100%", height = 36 }) => {
  return (
    <ButtonContainer style={{ width: width, height: height }}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
