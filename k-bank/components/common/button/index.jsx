import React from "react";
import { ButtonContainer } from "./button.styled";

const index = ({ onClick, className, children }) => {
  return (
    <ButtonContainer onClick={onClick} className={className}>
      {children}
    </ButtonContainer>
  );
};

export default index;
