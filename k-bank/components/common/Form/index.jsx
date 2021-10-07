import React, { useCallback } from "react";
import { FormContariner } from "./Form.styled";
import Button from "../Button";

const index = ({ children, onSubmit, hasSubmit, submitText }) => {
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      onSubmit ? onSubmit() : console.error("Unhandled submit function");
    },
    [onSubmit]
  );
  return (
    <FormContariner onSubmit={handleSubmit}>
      {children}
      {hasSubmit && <Button>{submitText}</Button>}
    </FormContariner>
  );
};

export default index;
