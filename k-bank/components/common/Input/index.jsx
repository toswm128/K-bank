import React from "react";
import { InputContainer } from "./input.styled";

const index = ({ onChange, className, value, placeholder, onClick, ref }) => {
  return (
    <InputContainer
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      value={value}
      onClick={onClick}
      ref={ref}
    />
  );
};

export default index;
