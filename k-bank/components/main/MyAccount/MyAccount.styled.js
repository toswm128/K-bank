import styled from "@emotion/styled";

export const MyAccountContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to bottom right,
    rgba(227, 110, 45, 0.63),
    #ff355d 70%
  );
  border-radius: 10px;
  padding: 22px;
`;

export const MyAccountTitle = styled.h1`
  width: 100%;
  flex: 1;
  font-size: 22px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  overflow-wrap: break-word;
  margin: 0;
  p {
    margin: 0;
    font-size: 18px;
    font-weight: normal;
  }
`;

export const MyAccountInfo = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  h1 {
    flex: 3;
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    p {
      font-size: 18px;
      margin: 0;
      font-weight: normal;
      display: inline;
    }
  }
  button {
    background-color: white;
    color: #ff355d;
    width: 62.5px;
    height: auto;
    border-radius: 10px;
  }
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
