import { atom, selector } from "recoil";

export const isKeyPadOnState = atom({
  key: "keyPad/isKeyPadOn",
  default: false,
});

export const KeyPadValueState = atom({
  key: "keyPad/KeyPadValue",
  default: "",
});
