import React from "react";
import { TouchableOpacity, Dimensions, TextInput } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Auth_Input } from "../style";

const { width } = Dimensions.get("screen");

// const Container = styled.TextInput`
//   width: ${width / 1.5}px;
//   padding: 12.5px 20px;
//   border: 1px solid grey;
//   background-color: white;
//   border-radius: 30px;
//   margin-bottom: 10px;
//   font-weight: 500;
// `;

const Input = ({
  value,
  placeholder,
  isPassword = false,
  autoCapitalize = "none",
  stateFn,
  keyboardType = "default",
}) => (
  <TextInput
    style={Auth_Input(width)}
    keyboardType={keyboardType}
    value={value}
    placeholder={placeholder}
    secureTextEntry={isPassword ? true : false}
    autoCapitalize={autoCapitalize}
    onChangeText={(text) => stateFn(text)}
  />
);

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  stateFn: PropTypes.func.isRequired,
};

export default Input;
