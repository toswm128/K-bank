// files.append("profile", formFile);
//     files.append("id", id.value);
//     files.append("pwd", password.value);
//     files.append("phone-number", phoneNumber.value);
//     files.append("ssn", RRN.value);
//     files.append("name", name.value);
//     files.append("nickname", nickName.value);
//     files.append("agree", "Y");
//     files.append("simple-pwd", "123456");
import { atom, selector } from "recoil";

export const profileState = atom({
  key: "auth/profile",
  default: undefined,
});
export const previewState = atom({
  key: "auth/preview",
  default: undefined,
});

export const idState = atom({
  key: "auth/id",
  default: "",
});

export const passwordState = atom({
  key: "auth/password",
  default: "",
});

export const passwordVerifyState = atom({
  key: "auth/passwordVerify",
  default: "",
});

export const phoneNumberState = atom({
  key: "auth/phoneNumber",
  default: "",
});

export const ssnState = atom({
  key: "auth/ssn",
  default: "",
});

export const nameState = atom({
  key: "auth/name",
  default: "",
});

export const nickNameState = atom({
  key: "auth/nickName",
  default: "",
});

export const agreeState = atom({
  key: "auth/agree",
  default: false,
});

export const simplePwdState = atom({
  key: "auth/simplePwd",
  default: "",
});

// export const joinDataSelector = selector({
//     key:"auth/joinData",
//     get:({get})=>{
//         const id =  get(idState)
//         const id =  get(idState)
//         const id =  get(idState)
//         const id =  get(idState)
//         const id =  get(idState)
//         const id =  get(idState)
//         const id =  get(idState)
//         const id =  get(idState)
//         const id =  get(idState)
//     }
// })
