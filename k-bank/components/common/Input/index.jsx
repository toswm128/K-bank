import React from "react";
import { InputContainer } from "./input.styled";

const index = ({ onChange, className, value, placeholder }) => {
  return (
    <InputContainer
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default index;
