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

export const postLoginSelector = selector({
  key: "auth/postLogin",
  get: ({ get }) => get(UserAPI.login()),
});

export const getTokenSelector = selector({
  key: "auth/getToken",
  get: ({ get }) => get(UserAPI.refreshToken()),
});
