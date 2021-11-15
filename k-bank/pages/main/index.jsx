import React from "react";
import { atom } from "recoil";
import { MainContainer } from "./mainPage.styled";
import Main from "../../components/main/MyAccount";
import MyGeneralAccount from "../../components/main/MyGeneralAccount";

const index = () => {
  return (
    <MainContainer>
      <Main />
      <MyGeneralAccount />
    </MainContainer>
  );
};

export default index;
