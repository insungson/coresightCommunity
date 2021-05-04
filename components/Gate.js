import React from "react";
import { useSelector } from "react-redux";
import Auth from "../navigation/Auth";
import Main from "../navigation/Main";
import { NavigationContainer } from "@react-navigation/native";

export default () => {
  const { token } = useSelector((state) => state.USERS);
  return (
    <NavigationContainer>{token ? <Main /> : <Auth />}</NavigationContainer>
  );
};
