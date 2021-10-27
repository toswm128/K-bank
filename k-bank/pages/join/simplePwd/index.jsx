import React from "react";
import { SimplePwdContainer } from "./simplePwd.styled";
import SimplePwd from "../../../components/auth/SimplePwd";
import KeyPad from "../../../components/common/KeyPad";
import useKeyPad from "../../../hook/Recoil/useKeyPad";
import useJoin from "../../../hook/Recoil/useJoin";

const index = () => {
  const { join } = useJoin();
  const { keyPadStateValue } = useKeyPad();
  return (
    <SimplePwdContainer>
      <h2>간편 비밀번호 6자리를 입력해 주세요</h2>
      <SimplePwd />
      {keyPadStateValue.isKeyPadOn && <KeyPad submit={join} />}
    </SimplePwdContainer>
  );
};

export default index;
