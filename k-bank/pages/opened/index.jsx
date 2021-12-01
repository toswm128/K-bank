import React, { useState, useEffect } from "react";
import { OpenedContainer } from "./openedPage.styled";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import useBank from "../../hook/Recoil/useBank";
import useAuth from "../../hook/Recoil/useAuth";
import { useRouter } from "next/dist/client/router";

const index = () => {
  const [name, setName] = useState("");
  const [ssn, setSsn] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const { tryIdentity } = useAuth();
  const router = useRouter();

  const submit = () => {
    tryIdentity({ name, ssn }).then(() => router.push("/opened/account"));
  };

  useEffect(() => {
    name && ssn && setIsSubmit(true);
  }, [name, ssn]);

  return (
    <OpenedContainer>
      <h1>본인인증</h1>
      <Form onSubmit={submit} hasSubmit={isSubmit} submitText="다음">
        <Input
          value={name}
          placeholder="이름"
          onChange={e => setName(e.target.value)}
        />
        <Input
          value={ssn}
          placeholder="주민등록번호"
          onChange={e => setSsn(e.target.value)}
        />
      </Form>
    </OpenedContainer>
  );
};

export default index;
