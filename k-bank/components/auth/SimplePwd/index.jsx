import React, { useRef, useEffect } from "react";
import useJoin from "../../../hook/Recoil/useJoin";
import useKeyPad from "../../../hook/Recoil/useKeyPad";
import { SimplePwdContainer, SimplePwdList } from "./SimplePwd.styled";
import Form from "../../common/Form";
import Input from "../../common/Input";

const index = () => {
  const simplePwd = useJoin().simplePwdInput();
  const { openKeyPad, keyPadStateValue } = useKeyPad();
  const ketPadInput = useRef();
  console.log(ketPadInput);
  useEffect(() => {
    simplePwd.setValue(keyPadStateValue.KeyPadValue);
  }, [keyPadStateValue.KeyPadValue]);
  return (
    <SimplePwdContainer>
      <SimplePwdList onClick={openKeyPad}>
        <div>{keyPadStateValue.KeyPadValue[0]}</div>
        <div>{keyPadStateValue.KeyPadValue[1]}</div>
        <div>{keyPadStateValue.KeyPadValue[2]}</div>
        <div>{keyPadStateValue.KeyPadValue[3]}</div>
        <div>{keyPadStateValue.KeyPadValue[4]}</div>
        <div>{keyPadStateValue.KeyPadValue[5]}</div>
      </SimplePwdList>
    </SimplePwdContainer>
  );
};

export default index;
