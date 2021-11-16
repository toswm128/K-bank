import Link from "next/link";
import React from "react";
import { MainButtonContainer } from "./MainButton.styled";

const index = ({ href, buttonName }) => {
  return (
    <Link href={href}>
      <MainButtonContainer>{buttonName}</MainButtonContainer>
    </Link>
  );
};

export default index;
