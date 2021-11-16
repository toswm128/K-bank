import { atom, selector } from "recoil";

export const isAccountListState = atom({
  key: "bank/isAccountList",
  default: false,
});

export const accountListState = atom({
  key: "bank/accountList",
  default: [],
});

export const isAccountHistoryState = atom({
  key: "bank/isAccountHistory",
  default: false,
});

export const accountHistoryState = atom({
  key: "bank/accountHistory",
  default: [],
});
