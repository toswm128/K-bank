import React, { useRef } from "react";
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
      <Form>
        <input
          value={keyPadStateValue.KeyPadValue}
          onChange={simplePwd.onChange}
          onClick={() => {
            openKeyPad();
            ketPadInput.current.blur();
          }}
          ref={ketPadInput}
        />
      </Form>
    </SimplePwdContainer>
  );
};

export default index;
