import { useRecoilState } from "recoil";
import { isLoginState, tokenState } from "../../states/Auth/AuthState";
import UserAPI from "../../assets/API/UserAPI";

const useAuth = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [token, setToken] = useRecoilState(tokenState);
  const useLogin = async loginData => {
    try {
      const data = await UserAPI.login(loginData);
      setIsLogin(isLogin);
      setToken(data.token);
    } catch (err) {
      console.log(err);
      setIsLogin(false);
    }
    console.log(isLogin);
  };

  return { useLogin };
};

export default useAuth;
