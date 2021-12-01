import React, { useEffect } from "react";
import { atom } from "recoil";
import { MainContainer } from "./mainPage.styled";
import Main from "../../components/main/MyAccount";
import MainButton from "../../components/main/MainButton";
import MyGeneralAccount from "../../components/main/MyGeneralAccount";
import useBank from "../../hook/Recoil/useBank";
import useKeyPad from "../../hook/Recoil/useKeyPad";

const index = () => {
  const { getAccountList, BankState } = useBank();
  // const { keyPadStateValue } = useKeyPad();
  useEffect(() => {
    getAccountList();
  }, []);
  // getAccountList();
  // console.log(keyPadStateValue);
  return (
    <MainContainer>
      <Main />

      {BankState.accountList.map(account => (
        <MyGeneralAccount account={account} />
      ))}
      <MainButton href="opened" buttonName="계좌개설" />
      <MainButton href="login" buttonName="계좌추가" />
    </MainContainer>
  );
};

export default index;
