import { useRecoilState } from "recoil";
import {
  isKeyPadOnState,
  KeyPadValueState,
} from "../../states/KeyPad/KeyPadState";

const useKeyPad = () => {
  const [isKeyPadOn, setIsKeyPadOn] = useRecoilState(isKeyPadOnState);
  const [KeyPadValue, setKeyPadValue] = useRecoilState(KeyPadValueState);

  const openKeyPad = () => {
    setIsKeyPadOn(true);
  };

  const closeKeyPad = () => {
    setIsKeyPadOn(false);
  };

  const changeSetKeyPadValue = value => {
    !KeyPadValue[5] && setKeyPadValue(value);
  };

  const deleteSetKeyPadValue = () => {
    KeyPadValue[0] ? setKeyPadValue(KeyPadValue.slice(0, -1)) : closeKeyPad();
  };

  const deleteAllKeyPadValue = () => {
    setKeyPadValue("");
  };

  const keyPadStateValue = {
    isKeyPadOn,
    KeyPadValue,
  };

  return {
    openKeyPad,
    closeKeyPad,
    changeSetKeyPadValue,
    deleteSetKeyPadValue,
    deleteAllKeyPadValue,
    keyPadStateValue,
  };
};

export default useKeyPad;
