import React, { useState } from "react";
import utils from "../../../utils";
import api from "../../../api";
import SignUpPresenter from "./SignUpPresenter";

const SignUpContainer = ({ navigation: { navigate } }) => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isFormValid = () => {
    if (id === "" || email === "" || password === "") {
      alert("모든 항목을 채워주셔야 합니다.");
      return false;
    }
    if (!utils.isEmail(email)) {
      alert("이메일 양식에 맞지 않습니다 다시 입력해주세요");
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (!isFormValid()) {
      return;
    }
    setLoading(true);
    try {
      const { status } = await api.createAccount({
        id,
        email,
        password,
      });
      if (status === 201) {
        alert("계정이 생성되었습니다.");
        navigate("SignIn", { email, password });
      }
    } catch (error) {
      alert("이미 존재하는 이멜입니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignUpPresenter
      id={id}
      setId={setId}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUpContainer;
