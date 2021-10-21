import React from "react";
import {
  MyAccountContainer,
  MyAccountTitle,
  MyAccountInfo,
} from "./MyAccount.styled";
import Button from "../../common/Button";

const index = () => {
  return (
    <MyAccountContainer>
      <MyAccountTitle>
        MyAccount<p>농협 은행</p>
      </MyAccountTitle>
      <MyAccountInfo>
        <h1>
          100,000,000<p> 원</p>
        </h1>
        <div>
          <Button>이체</Button>
        </div>
      </MyAccountInfo>
    </MyAccountContainer>
  );
};

export default index;
