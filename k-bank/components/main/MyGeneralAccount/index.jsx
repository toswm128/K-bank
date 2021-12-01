import React from "react";
import AccountItem from "./AccountItem";
import { MyGeneralAccountContainer } from "./MyGeneralAccount.styled";

const index = ({ account }) => {
  return (
    <MyGeneralAccountContainer>
      <AccountItem account={account} />
    </MyGeneralAccountContainer>
  );
};

export default index;
