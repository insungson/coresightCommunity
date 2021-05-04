import React from "react";
import { StatusBar, View, Image } from "react-native";
import { BlurView } from "expo-blur";
import Btn from "../../components/Auth/Btn";
import { Auth_welcomeStyle } from "../Style";

const coresightCI = require("../../assets/coresightCI.png");

const Welcome = ({ navigation }) => {
  const goToSignUp = () => navigation.navigate("SignUp");
  const goToSignIn = () => navigation.navigate("SignIn");
  console.log("image", coresightCI, require("../../assets/loginBg.png"));
  return (
    <View style={Auth_welcomeStyle.container}>
      <BlurView
        intensity={50}
        tint="light"
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={coresightCI} style={Auth_welcomeStyle.image} />
        <View style={Auth_welcomeStyle.btnContainer}>
          <Btn onPress={goToSignUp} text={"Sign Up"} accent={true} />
          <Btn onPress={goToSignIn} text={"Sign In"} />
        </View>
      </BlurView>
      <Image
        source={{
          uri: "https://unsplash.com/photos/OQTjr9yl9xU",
        }}
        style={Auth_welcomeStyle.image}
      />
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default Welcome;
