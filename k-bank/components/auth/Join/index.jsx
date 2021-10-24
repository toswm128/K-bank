import React, { useCallback, useState } from "react";
import Input from "../../common/Input";
import Form from "../../common/Form";
import Button from "../../common/Button";
import { OverlapInput, ProfileContainer } from "./Join.styled";
import useInput from "../../../hook/useInput";
import { useEffect } from "react";

const index = () => {
  const [formFile, setFile] = useState();
  const [preview, setPreview] = useState();

  const id = useInput();
  const password = useInput();
  const passwordVerify = useInput();
  const phoneNumber = useInput();
  const RRN = useInput();
  const name = useInput();
  const nickName = useInput();

  const handleFileInput = useCallback(e => {
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
      setFile(file);

      setPreview(URL.createObjectURL(file));
    }
  }, []);

  const onSubmit = () => {
    console.log("회원가입 되었습니다");
    const files = new FormData();

    files.append("file", formFile);
    files.append("id", id.value);
    files.append("password", password.value);
    files.append("passwordVerify", passwordVerify.value);
    files.append("phoneNumber", phoneNumber.value);
    files.append("RRN", RRN.value);
    files.append("name", name.value);
    files.append("nickName", nickName.value);
  };

  useEffect(() => {
    if (phoneNumber.value) {
      phoneNumber.setValue(
        phoneNumber.value
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
    if (RRN.value) {
      RRN.setValue(
        RRN.value.replace(/-/g, "").replace(/(\d{6})(\d{1})/, "$1-$2")
      );
    }
  }, [phoneNumber.value, phoneNumber.setValue, RRN.value, RRN.setValue]);

  return (
    <Form hasSubmit submitText="회원가입" onSubmit={onSubmit}>
      <ProfileContainer>
        <div className="profile_img">
          <img
            className="profile_img_item"
            src={
              preview
                ? preview
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
        value={password.value}
        onChange={password.onChange}
        placeholder="비밀번호"
      />
      <Input
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
