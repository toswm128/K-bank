import React from "react";
import { AccountItemContainer } from "./AccountItem.styled";
import Button from "../../../common/Button";
import { useRouter } from "next/dist/client/router";
import useBalance from "../../../../hook/useBalance";

const index = ({ account }) => {
  const router = useRouter();
  return (
    <AccountItemContainer>
      <div className="bankName">
        {account.nickname
          ? account.nickname + " " + account.account_number
          : account.account_number}
      </div>
      <div></div>
      <div className="money">
        <string>{useBalance(account.balance)}</string>
        <string className="won">원</string>
      </div>
      <div className="button">
        <Button
          onClick={() =>
            router.push(`/transfer?account_number=${account.account_number}`)
          }
        >
          이체
        </Button>
      </div>
    </AccountItemContainer>
  );
};

export default index;
