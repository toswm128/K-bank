import React from "react";
import Input from "../../common/Input";
import Form from "../../common/Form";
import Logo from "../../../assets/images/k-bankBigLogo.svg";
import Image from "next/image";
import useInput from "../../../hook/useInput";
import useAuth from "../../../hook/Recoil/useAuth";
import SimplePwd from "../SimplePwd";

const index = () => {
  const { useLogin } = useAuth();

  const id = useInput();
  const password = useInput();
  const onSubmit = async () => {
    const loginData = { id: id.value, pwd: password.value };
    useLogin(loginData);
  };
  return (
    <Form hasSubmit submitText="로그인" onSubmit={onSubmit}>
      <div style={{ marginBottom: "10px" }}>
        <Image src={Logo} alt="" />
      </div>
      <Input value={id.value} onChange={id.onChange} placeholder="아이디" />
      <Input
        value={password.value}
        onChange={password.onChange}
        placeholder="비밀번호"
      />
    </Form>
  );
};

export default index;
