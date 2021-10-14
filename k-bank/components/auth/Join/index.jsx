import React from "react";
import Input from "../../common/Input";
import Form from "../../common/Form";
import Button from "../../common/Button";
import { OverlapInput, ProfileContainer } from "./Join.styled";
import Image from "next/image";
import Logo from "../../../assets/images/k-bankBigLogo.svg";
const index = () => {
  const onSubmit = () => {
    console.log("회원가입 되었습니다");
  };
  return (
    <Form hasSubmit submitText="회원가입" onSubmit={onSubmit}>
      <ProfileContainer>
        <div className="profile_img">
          <img
            className="profile_img_item"
            src="https://img.hankyung.com/photo/201908/BF.20281777.1.jpg"
            alt=""
          />
        </div>
        <div className="profile_button">
          <label htmlFor="profile" style={{ width: "100%" }}>
            프로필사진
            <Button>사진 선택</Button>
          </label>
          <input id="profile" type="file" style={{ width: "0px" }} />
        </div>
      </ProfileContainer>
      <OverlapInput>
        <Input placeholder="아이디" />
        <Button>중복확인</Button>
      </OverlapInput>
      <OverlapInput>
        <Input placeholder="비밀번호" />
        <Button>중복확인</Button>
      </OverlapInput>
      <Input placeholder="비밀번호 확인" />
      <Input placeholder="이메일" />
      <Input placeholder="이름" />
      <Input placeholder="주민등록번호" />
      <OverlapInput>
        <Input placeholder="닉네임" />
        <Button>중복확인</Button>
      </OverlapInput>
    </Form>
  );
};

export default index;
