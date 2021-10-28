import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import UserAPI from "../../assets/API/UserAPI";

export const isLoginState = atom({
  key: "auth/isLogin",
  default: false,
});

export const tokenState = atom({
  key: "auth/token",
  default: "",
});

export const idState = atom({
  key: "auth/id",
});

export const passwordState = atom({
  key: "auth/password",
});
