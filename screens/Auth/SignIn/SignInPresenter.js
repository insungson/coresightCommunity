import React from "react";
import { StatusBar, View, KeyboardAvoidingView } from "react-native";
import Btn from "../../../components/Auth/Btn";
import Input from "../../../components/Auth/Input";
import { Auth_SignInStyle } from "../../Style";
import DismissKeyboard from "../../../components/DismissKeyboard";

const SignInPresenter = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) => {
  return (
    <DismissKeyboard>
      <View style={Auth_SignInStyle.container}>
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView behavior="position">
          <View style={Auth_SignInStyle.inputContainer}>
            <Input
              value={email}
              placeholder="이메일을 입력해주세요"
              keyboardType="email-address"
              stateFn={setEmail}
            />
            <Input
              value={password}
              placeholder="비밀번호를 입력해주세요"
              isPassword={true}
              stateFn={setPassword}
            />
          </View>
          <Btn text={"Sign In"} accent onPress={handleSubmit}></Btn>
        </KeyboardAvoidingView>
      </View>
    </DismissKeyboard>
  );
};

export default SignInPresenter;
