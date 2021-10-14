import React from "react";
import Input from "../../common/Input";
import Form from "../../common/Form";
import Button from "../../common/Button";
import { OverlapInput, ProfileContainer } from "./Join.styled";
import Image from "next/image";
import Logo from "../../../assets/images/k-bankBigLogo.svg";
import useInput from "../../../hook/useInput";
const index = () => {
  const onSubmit = () => {
    console.log("회원가입 되었습니다");
  };
  const id = useInput();
  const password = useInput();
  const passwordVerify = useInput();
  const email = useInput();
  const RRN = useInput();
  const name = useInput();
  const nickName = useInput();
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
        <Input value={id.value} onChange={id.onChange} placeholder="아이디" />
        <Button>중복확인</Button>
      </OverlapInput>
      <OverlapInput>
        <Input
          value={password.value}
          onChange={password.onChange}
          placeholder="비밀번호"
        />
        <Button>중복확인</Button>
      </OverlapInput>
      <Input
        value={passwordVerify.value}
        onChange={passwordVerify.onChange}
        placeholder="비밀번호 확인"
      />
      <Input
        value={email.value}
        onChange={email.onChange}
        placeholder="이메일"
      />
      <Input
        value={RRN.value}
        onChange={RRN.onChange}
        placeholder="주민등록번호"
      />
      <Input value={name.value} onChange={name.onChange} placeholder="이름" />
      <OverlapInput>
        <Input
          value={nickName.value}
          onChange={nickName.onChange}
          placeholder="닉네임"
        />
        <Button>중복확인</Button>
      </OverlapInput>
    </Form>
  );
};

export default index;
