import React from "react";
import { AccountItemContainer } from "./AccountItem.styled";
import Button from "../../../common/Button";
const index = ({ account }) => {
  return (
    <AccountItemContainer>
      <div className="bankName">은행이름</div>
      <div></div>
      <div className="money">
        <string>100,000,000</string>
        <string className="won">원</string>
      </div>
      <div className="button">
        <Button>이체</Button>
      </div>
    </AccountItemContainer>
  );
};

export default index;
