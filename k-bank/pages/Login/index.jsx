import Login from "../../components/auth/Login";
import SimplePwd from "../../components/auth/SimplePwd";
import KeyPad from "../../components/common/KeyPad";
import { LoginContainer } from "./loginPage.styled";
import Link from "next/link";
import useAuth from "../../hook/Recoil/useAuth";
import useKeyPad from "../../hook/Recoil/useKeyPad";

const index = () => {
  const { keyPadStateValue } = useKeyPad();
  const { trySimpleLogin } = useAuth();
  return (
    <LoginContainer>
      <Login />
      <SimplePwd />
      {keyPadStateValue.isKeyPadOn && <KeyPad submit={trySimpleLogin} />}
      <Link href="join">회원이 아니신가요?</Link>
    </LoginContainer>
  );
};

export default index;
