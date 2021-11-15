import React from "react";
import { InputContainer } from "./input.styled";

const index = ({
  onChange,
  className,
  value,
  placeholder,
  onClick,
  ref,
  type,
}) => {
  return (
    <InputContainer
      type={type}
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
