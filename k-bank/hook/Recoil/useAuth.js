import { useRecoilState } from "recoil";
import {
  idState,
  isLoginState,
  passwordState,
  tokenState,
} from "../../states/Auth/AuthState";
import UserAPI from "../../assets/API/UserAPI";
import useRecoilInput from "./useRecoilInput";
import useJoin from "./useJoin";

const useAuth = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [token, setToken] = useRecoilState(tokenState);

  const simplePwd = useJoin().simplePwdInput();

  const [id, setId] = useRecoilState(idState);
  const [password, setPassword] = useRecoilState(passwordState);

  const idInput = () => {
    return useRecoilInput(id, setId);
  };
  const passwordInput = () => {
    return useRecoilInput(password, setPassword);
  };

  const useLogin = async loginData => {
    try {
      const data = await UserAPI.login(loginData);
      setIsLogin(isLogin);
      setToken(data.token);
      localStorage.setItem("accessToken", data.access_token);
      localStorage.setItem("personalToken", data.personal_token);
    } catch (err) {
      console.log(err);
      setIsLogin(false);
    }
    console.log(isLogin);
  };

  const trySimpleLogin = async () => {
    try {
      const data = await UserAPI.simpleLogin({ "simple-pwd": simplePwd.value });
      setIsLogin(isLogin);
      return data;
    } catch (err) {
      console.log(err);
      setIsLogin(false);
    }
  };

  return { useLogin, idInput, passwordInput, trySimpleLogin };
};

export default useAuth;
