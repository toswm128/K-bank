import React from "react";
import { atom } from "recoil";
import { MainContainer } from "./mainPage.styled";
import Main from "../../components/main/MyAccount";

const index = () => {
  return (
    <MainContainer>
      <Main />
    </MainContainer>
  );
};

export default index;
