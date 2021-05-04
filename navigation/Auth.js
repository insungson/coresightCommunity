import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Welcome from "../screens/Auth/Welcome";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";

//게시판관련

const Auth = createStackNavigator();

export default () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "black",
          shadowColor: "black",
        },
        headerTintColor: "white",
        headerBackTitleVisible: false,
      }}
    >
      <Auth.Screen
        name="Welcome"
        component={Welcome}
        CardStyleInterpolators={CardStyleInterpolators.forHorizontalIOS}
      />
      <Auth.Screen
        name="SignIn"
        component={SignIn}
        CardStyleInterpolators={CardStyleInterpolators.forHorizontalIOS}
      />
      <Auth.Screen
        name="SignUp"
        component={SignUp}
        CardStyleInterpolators={CardStyleInterpolators.forHorizontalIOS}
      />
    </Auth.Navigator>
  );
};
