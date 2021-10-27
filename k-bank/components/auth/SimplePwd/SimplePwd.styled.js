import styled from "@emotion/styled";

export const SimplePwdContainer = styled.div`
  input {
    display: none;
  }
`;

export const SimplePwdList = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  div {
    font-size: 1rem;
    font-weight: 400;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4px;
  }
`;
