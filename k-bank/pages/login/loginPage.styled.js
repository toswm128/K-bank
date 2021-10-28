import styled from "@emotion/styled";

export const LoginContainer = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 30px;
  .or {
    width: 250%;
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      text-align: center;
      width: 37px;
      position: relative;
      background-color: white;
      color: #c4c4c4;
    }
    .line {
      width: 250px;
      position: absolute;
      z-index: -1;
      border: 1px solid #c4c4c4;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
