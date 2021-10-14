import React from "react";
import Join from "../../components/auth/Join";
import { JoinContainer } from "./joinPage.styled";
import Link from "next/link";
const index = () => {
  return (
    <JoinContainer>
      <Join />
      <Link href="/login">회원이신가요?</Link>
    </JoinContainer>
  );
};

export default index;
