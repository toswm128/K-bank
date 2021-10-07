import React from "react";
import Input from "../../components/common/Input";
import Form from "../../components/common/Form";

const index = () => {
  const onSubmit = () => {
    console.log("로그인 되었습니다!");
  };
  return (
    <Form hasSubmit submitText="로그인" onSubmit={onSubmit}>
      <Input />
      <Input />
    </Form>
  );
};

export default index;
