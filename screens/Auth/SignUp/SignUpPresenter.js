import React, { useState, useCallback } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  View,
  TextInput,
  Dimensions,
} from "react-native";
import { Auth_SignUpStyle, Auth_Input } from "../../Style";
import Btn from "../../../components/Auth/Btn";
import Input from "../../../components/Auth/Input";
import DismissKeyboard from "../../../components/DismissKeyboard";

const { width } = Dimensions.get("screen");

const SignUpPresenter = ({
  id,
  setId,
  email,
  setEmail,
  password,
  setPassword,
  loading,
  handleSubmit,
}) => {
  const [passwordconfirm, setPasswordconfirm] = useState("");
  const passwordCheck = useCallback(() => {
    if (password.trim() === "") {
      alert("비밀번호를 확인해야합니다. 빈칸을 입력해주세요");
    } else if (password.trim() !== passwordconfirm.trim()) {
      alert("앞서 입력하신 비밀번호와 다릅니다. 다시 입력해주세요");
      setPasswordconfirm("");
    }
  }, [password, passwordconfirm]);
  return (
    <DismissKeyboard>
      <View style={Auth_SignUpStyle.container}>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="position">
          <View style={Auth_SignUpStyle.InputContainer}>
            <Input
              value={id}
              placeholder="아이디를 입력해주세요"
              stateFn={setId}
            />
            <Input
              value={email}
              placeholder="이메일을 입력해주세요"
              stateFn={setEmail}
              keyboardType={"email-address"}
            />
            <Input
              value={password}
              placeholder="비밀번호를 입력해주세요"
              isPassword={true}
              stateFn={setPassword}
            />
            <TextInput
              value={passwordconfirm}
              placeholder="비밀번호를 한번더 입력해주세요"
              secureTextEntry={true}
              onBlur={passwordCheck}
              onChangeText={(text) => setPasswordconfirm(text)}
              style={Auth_Input(width)}
            />
          </View>
          <Btn loading={loading} text={"Sign Up"} onPress={handleSubmit}></Btn>
        </KeyboardAvoidingView>
      </View>
    </DismissKeyboard>
  );
};

export default SignUpPresenter;
