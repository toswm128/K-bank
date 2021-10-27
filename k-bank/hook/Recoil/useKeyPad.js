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
    setKeyPadValue(value);
  };

  const keyPadStateValue = {
    isKeyPadOn,
    KeyPadValue,
  };

  return { openKeyPad, closeKeyPad, changeSetKeyPadValue, keyPadStateValue };
};

export default useKeyPad;
