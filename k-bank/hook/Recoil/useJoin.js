import { useRecoilState } from "recoil";
import UserAPI from "../../assets/API/UserAPI";
import {
  agreeState,
  idState,
  nameState,
  nickNameState,
  passwordState,
  passwordVerifyState,
  phoneNumberState,
  previewState,
  profileState,
  simplePwdState,
  ssnState,
} from "../../states/Auth/JoinState";
import useRecoilInput from "./useRecoilInput";

const useJoin = () => {
  const [profile, setProfile] = useRecoilState(profileState);
  const [preview, setPreview] = useRecoilState(previewState);
  const [id, setId] = useRecoilState(idState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [passwordVerify, setPasswordVerify] =
    useRecoilState(passwordVerifyState);
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberState);
  const [ssn, setSsn] = useRecoilState(ssnState);
  const [name, setName] = useRecoilState(nameState);
  const [nickName, setNickName] = useRecoilState(nickNameState);
  const [agree, setAgree] = useRecoilState(agreeState);
  const [simplePwd, setSimplePwd] = useRecoilState(simplePwdState);

  const profileInput = () => {
    return useRecoilInput(profile, setProfile);
  };
  const previewInput = () => {
    return useRecoilInput(preview, setPreview);
  };

  const idInput = () => {
    return useRecoilInput(id, setId);
  };
  const passwordInput = () => {
    return useRecoilInput(password, setPassword);
  };
  const passwordVerifyInput = () => {
    return useRecoilInput(passwordVerify, setPasswordVerify);
  };
  const phoneNumberInput = () => {
    return useRecoilInput(phoneNumber, setPhoneNumber);
  };
  const ssnInput = () => {
    return useRecoilInput(ssn, setSsn);
  };
  const nameInput = () => {
    return useRecoilInput(name, setName);
  };
  const nickNameInput = () => {
    return useRecoilInput(nickName, setNickName);
  };
  const agreeInput = () => {
    return useRecoilInput(agree, setAgree);
  };
  const simplePwdInput = () => {
    return useRecoilInput(simplePwd, setSimplePwd);
  };

  const join = async () => {
    const files = new FormData();
    files.append("profile", profile);
    files.append("id", id);
    files.append("pwd", password);
    files.append("phone-number", phoneNumber);
    files.append("ssn", ssn);
    files.append("name", name);
    files.append("nickname", nickName);
    files.append("agree", agree);
    files.append("simple-pwd", simplePwd);

    try {
      const data = await UserAPI.siguUp(files);
      console.log(data);
    } catch (err) {
      console.log(err.response);
    }
  };

  const checkJoinData = () => {
    console.log(
      profile & id & password & phoneNumber & ssn & name & nickName & agree
        ? true
        : false,
      profile,
      id,
      password,
      phoneNumber,
      ssn,
      name,
      nickName,
      agree
    );
    return profile &&
      id &&
      password &&
      phoneNumber &&
      ssn &&
      name &&
      nickName &&
      agree
      ? true
      : false;
  };

  return {
    profileInput,
    previewInput,
    idInput,
    passwordInput,
    passwordVerifyInput,
    phoneNumberInput,
    ssnInput,
    nameInput,
    nickNameInput,
    agreeInput,
    simplePwdInput,
    join,
    checkJoinData,
  };
};

export default useJoin;
