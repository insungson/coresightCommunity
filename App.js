import React, { useState } from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Auth";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Gate from "./components/Gate";
import store, { persistor, tempStore } from "./redux/store";

//이미지 미리 캐싱하기
const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

//폰트캐싱
const cacheFonts = (fonts) =>
  fonts.map((font) => [Font.loadAsync(font), Font.loadAsync(font)]);

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadAssets = () => {
    //아래의 AppLoading의 startAsync 에서 promise 객체를 받기 때문에 async await 제거!(기존의 Font, Image 가 promise 객체리턴)
    const images = cacheImages([
      require("./assets/Picture1.png"),
      // require("./assets/splash.png"),
    ]);
    // console.log(">>", images); //Ionicons, Font, Image 전부 Promise 객체 리턴해줌
    const fonts = cacheFonts([Ionicons.font, FontAwesome.font]);
    // console.log(">> ", fonts);
    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => setIsReady(true);
  // redux-persist 대신 redux 를 사용한 tempStore 사용시 리듀서 얕게 사용가능
  return isReady ? (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Gate />
        </PersistGate>
      </Provider>
      <StatusBar style="light-content" />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={(e) => console.error(e)}
    />
  );
}

// // 임시로 RN 타입 디자인 만들고 아래와 같이 적용시킬것임
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
