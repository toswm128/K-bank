import Login from "../../components/auth/Login";
import { LoginContainer } from "./loginPage.styled";
import Link from "next/link";
const index = () => {
  return (
    <LoginContainer>
      <Login />
      <Link href="join">회원이 아니신가요?</Link>
    </LoginContainer>
  );
};

export default index;
