import React, { useCallback, useState } from "react";
import Input from "../../common/Input";
import Form from "../../common/Form";
import Button from "../../common/Button";
import { JoinContainer, OverlapInput, ProfileContainer } from "./Join.styled";
import useInput from "../../../hook/useInput";
import { useEffect } from "react";
import useJoin from "../../../hook/Recoil/useJoin";
import { useRouter } from "next/dist/client/router";
import useKeyPad from "../../../hook/Recoil/useKeyPad";

const index = () => {
  const router = useRouter();

  const profile = useJoin().profileInput();
  const preview = useJoin().previewInput();

  const id = useJoin().idInput();
  const password = useJoin().passwordInput();
  const passwordVerify = useJoin().passwordVerifyInput();
  const phoneNumber = useJoin().phoneNumberInput();
  const ssn = useJoin().ssnInput();
  const name = useJoin().nameInput();
  const nickName = useJoin().nickNameInput();
  const agree = useJoin().agreeInput();

  const { checkJoinData } = useJoin();
  const { openKeyPad } = useKeyPad();

  const handleFileInput = useCallback(
    e => {
      const imageFileExtensions = [
        "image/apng",
        "image/bmp",
        "image/gif",
        "image/jpeg",
        "image/pjpeg",
        "image/png",
        "image/svg+xml",
        "image/tiff",
        "image/webp",
        "image/x-icon",
      ];
      const file = e.target.files[0];
      let isValidImageType = true;

      isValidImageType = imageFileExtensions.includes(file.type);

      if (!isValidImageType) {
        return;
      }

      if (file.length !== 0) {
        profile.setValue(file);

        preview.setValue(URL.createObjectURL(file));
      }
    },
    [preview]
  );
  // 사진 받기

  const onSubmit = () => {
    if (checkJoinData()) {
      openKeyPad();
      router.push("/join/simplePwd");
    } else alert("입력정보를 확인해 주세요");
  };

  useEffect(() => {
    if (phoneNumber.value) {
      phoneNumber.setValue(
        phoneNumber.value
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
    if (ssn.value) {
      ssn.setValue(
        ssn.value.replace(/-/g, "").replace(/(\d{6})(\d{1})/, "$1-$2")
      );
    }
  }, [phoneNumber.value, phoneNumber.setValue, ssn.value, ssn.setValue]);
  //주민등록번호와 전화번호의 배열 정규식

  return (
    <JoinContainer>
      <Form hasSubmit submitText="회원가입" onSubmit={onSubmit}>
        <ProfileContainer>
          <div className="profile_img">
            <img
              className="profile_img_item"
              src={
                preview.value
                  ? preview.value
                  : "https://img.hankyung.com/photo/201908/BF.20281777.1.jpg"
              }
              alt=""
            />
          </div>
          <div className="profile_button">
            <div style={{ width: "100%" }}>
              프로필사진
              <label htmlFor="profile">사진 선택</label>
            </div>
            <input
              id="profile"
              type="file"
              onChange={handleFileInput}
              style={{ width: "0px" }}
            />
          </div>
        </ProfileContainer>
        <OverlapInput>
          <Input value={id.value} onChange={id.onChange} placeholder="아이디" />
          <Button>중복확인</Button>
        </OverlapInput>
        <Input
          type="password"
          value={password.value}
          onChange={password.onChange}
          placeholder="비밀번호"
        />
        <Input
          type="password"
          value={passwordVerify.value}
          onChange={passwordVerify.onChange}
          placeholder="비밀번호 확인"
        />
        <Input
          value={phoneNumber.value}
          onChange={phoneNumber.onChange}
          placeholder="전화번호"
        />
        <Input
          value={ssn.value}
          onChange={ssn.onChange}
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
      <div className="agreeForm">
        <label htmlFor="agree">약관 동의</label>
        <input
          value={agree.value}
          onClick={() => agree.setValue(!agree.value)}
          type="checkbox"
          id="agree"
        />
      </div>
    </JoinContainer>
  );
};

export default index;
