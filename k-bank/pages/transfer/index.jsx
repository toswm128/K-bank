import React, { useState } from "react";
import { TransferContainer } from "./transferPage.styled";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import { useRouter } from "next/dist/client/router";
import useBank from "../../hook/Recoil/useBank";

const index = () => {
  const [accountNum, setAccountNum] = useState("");
  const [money, setMoney] = useState("");
  const [bankId, setBankId] = useState("");
  const router = useRouter();
  const { account_number } = router.query;

  const { requestTransfer } = useBank();

  const submit = () => {
    requestTransfer({ bankId, account_number: accountNum, amount: money });
  };

  return (
    <TransferContainer>
      <h1>{account_number}</h1>
      <Form hasSubmit submitText="다음" onSubmit={submit}>
        <Input
          value={money}
          onChange={e => setMoney(e.target.value)}
          placeholder="금액"
        />
        <Input
          value={accountNum}
          onChange={e => setAccountNum(e.target.value)}
          placeholder="계좌번호"
        />
        <select>
          <option value="110">K-Bank</option>
          <option value="666">tossBank</option>
          <option value="031">DGB</option>
          <option value="108">KakaoBank</option>
          <option value="719">Meogu</option>
        </select>
      </Form>
    </TransferContainer>
  );
};

export default index;
