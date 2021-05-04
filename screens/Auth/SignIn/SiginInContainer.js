import React, { useState } from "react";
import utils from "../../../utils";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../redux/usersSlice";
import SignInPresenter from "./SignInPresenter";

const SignInContainer = ({ route: { params } }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState(params?.email || "");
  const [password, setPassword] = useState(params?.password || "");

  const isFormValid = () => {
    if (email === "" || password === "") {
      alert("빈칸을 채워주세요");
      return false;
    }
    if (!utils.isEmail(email)) {
      alert("이메일 양식으로 적어주세요");
      return false;
    }
    return true;
  };

  const handelSubmit = () => {
    if (!isFormValid()) {
      return;
    }
    dispatch(userLogin({ email, password }));
  };

  return (
    <SignInPresenter
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handelSubmit}
    />
  );
};

export default SignInContainer;
