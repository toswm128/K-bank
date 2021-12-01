import React, { useState, useEffect } from "react";
import { AccountContainer } from "./accountPage.styled";
import Form from "../../../components/common/Form";
import Input from "../../../components/common/Input";
import useBank from "../../../hook/Recoil/useBank";
import KeyPad from "../../../components/common/KeyPad";
import SimplePwd from "../../../components/auth/SimplePwd";
import useKeyPad from "../../../hook/Recoil/useKeyPad";
import { useRouter } from "next/dist/client/router";

const Account = () => {
  const [accountName, setAccountName] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const { tryOpenedAccount } = useBank();
  const router = useRouter();

  const submit = () => {
    tryOpenedAccount({
      account_nickname: accountName,
      pwd: keyPadStateValue.KeyPadValue,
    }).then(() => router.push("/main"));
  };
  const { keyPadStateValue, closeKeyPad, deleteAllKeyPadValue } = useKeyPad();
  useEffect(() => {
    accountName && keyPadStateValue.KeyPadValue && setIsSubmit(true);
  }, [accountName, keyPadStateValue.KeyPadValue]);

  useEffect(() => {
    deleteAllKeyPadValue();
  }, []);
  return (
    <AccountContainer>
      <h1>계좌 개설</h1>
      <Form onSubmit={submit} hasSubmit={isSubmit} submitText="다음">
        <Input
          value={accountName}
          placeholder="계좌이름"
          onChange={e => setAccountName(e.target.value)}
        />
        <SimplePwd />
      </Form>
      {keyPadStateValue.isKeyPadOn && <KeyPad submit={closeKeyPad} />}
    </AccountContainer>
  );
};

export default Account;
