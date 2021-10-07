import React from "react";
import { InputContainer } from "./input.styled";

const index = ({ onChange, className, value, placeholder }) => {
  return (
    <div>
      <InputContainer
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default index;
