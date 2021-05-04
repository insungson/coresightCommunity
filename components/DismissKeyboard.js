import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export default ({ children }) => {
  const onPress = () => Keyboard.dismiss(); // 키보드가 없어짐..
  // TouchableWithoutFeedback 는 클릭시 반응됨..
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {children}
    </TouchableWithoutFeedback>
  );
};
