import React from "react";
import { atom } from "recoil";
import { MainContainer } from "./mainPage.styled";
import Main from "../../components/main/MyAccount";
import MainButton from "../../components/main/MainButton";
import MyGeneralAccount from "../../components/main/MyGeneralAccount";

const index = () => {
  return (
    <MainContainer>
      <Main />
      <MyGeneralAccount />
      <MainButton href="login" buttonName="계좌추가" />
      <MainButton href="login" buttonName="계추가좌" />
    </MainContainer>
  );
};

export default index;
