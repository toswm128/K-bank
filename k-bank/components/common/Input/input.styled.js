import styled from "@emotion/styled";

export const InputContainer = styled.input`
  width: 100%;
  border: 1px solid black;
  outline: none;
  height: 42px;
  padding: 0 9px 0 9px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: bold;
  transition: ease-in-out 0.2s;
  &:focus {
    border: 1px solid #ff355d;
  }
`;
