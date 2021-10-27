import React from "react";
import { KeyPadContainer, KeyPadNumList } from "./keyPad.styled";
import Button from "../Button";
import useKeyPad from "../../../hook/Recoil/useKeyPad";
import useJoin from "../../../hook/Recoil/useJoin";
const index = () => {
  const {
    closeKeyPad,
    changeSetKeyPadValue,
    deleteSetKeyPadValue,
    keyPadStateValue,
  } = useKeyPad();
  const { join } = useJoin();
  return (
    <KeyPadContainer>
      <KeyPadNumList>
        <Button
          onClick={() =>
            changeSetKeyPadValue(keyPadStateValue.KeyPadValue + "1")
          }
        >
          1
        </Button>
        <Button
          onClick={() =>
            changeSetKeyPadValue(keyPadStateValue.KeyPadValue + "2")
          }
        >
          2
        </Button>
        <Button
          onClick={() =>
            changeSetKeyPadValue(keyPadStateValue.KeyPadValue + "3")
          }
        >
          3
        </Button>
      </KeyPadNumList>
      <KeyPadNumList>
        <Button
          onClick={() =>
            changeSetKeyPadValue(keyPadStateValue.KeyPadValue + "4")
          }
        >
          4
        </Button>
        <Button
          onClick={() =>
            changeSetKeyPadValue(keyPadStateValue.KeyPadValue + "5")
          }
        >
          5
        </Button>
        <Button
          onClick={() =>
            changeSetKeyPadValue(keyPadStateValue.KeyPadValue + "6")
          }
        >
          6
        </Button>
      </KeyPadNumList>
      <KeyPadNumList>
        <Button
          onClick={() =>
            changeSetKeyPadValue(keyPadStateValue.KeyPadValue + "7")
          }
        >
          7
        </Button>
        <Button
          onClick={() =>
            changeSetKeyPadValue(keyPadStateValue.KeyPadValue + "8")
          }
        >
          8
        </Button>
        <Button
          onClick={() =>
            changeSetKeyPadValue(keyPadStateValue.KeyPadValue + "9")
          }
        >
          9
        </Button>
      </KeyPadNumList>
      <KeyPadNumList>
        <Button onClick={deleteSetKeyPadValue}>취소</Button>
        <Button
          onClick={() =>
            changeSetKeyPadValue(keyPadStateValue.KeyPadValue + "0")
          }
        >
          0
        </Button>
        <Button
          onClick={() => {
            closeKeyPad();
            join();
          }}
        >
          확인
        </Button>
      </KeyPadNumList>
    </KeyPadContainer>
  );
};

export default index;
