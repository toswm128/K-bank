import styled from "@emotion/styled";

export const KeyPadContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 0;
`;

export const KeyPadNumList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 100%;
    border: 1px solid white;
    height: 100%;
    background-color: white;
    color: black;
    font-size: 1.5rem;
  }
  button:hover {
    background-color: rgb(230, 230, 230);
  }
`;
