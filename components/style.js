import { StyleSheet } from "react-native";

// reactNative 는 border가 없고 borderWidth, borderColor 처럼 나눠서 처리해야한다.
// https://blog.naver.com/PostView.nhn?blogId=lth9036&logNo=221725706016   참고
export const Auth_Input = (width) =>
  StyleSheet.create({
    container: {
      width: `${width / 1.5}px`,
      padding: "12.5px 20px",
      borderWidth: 1,
      borderColor: "grey",
      backgroundColor: "white",
      borderRadius: "30px",
      marginBottom: "10px",
      fontWeight: "500",
    },
  });

export const Auth_Btn = (width, accent) =>
  StyleSheet.create({
    button: {
      marginBottom: 25,
      // border: `1px solid ${accent ? "transparent" : "rgb(35, 35, 35)"}`,
      borderWidth: 1,
      borderColor: `${accent} ? "black" : "rgb(35, 35, 35)"`,
      borderRadius: 30,
      padding: "12.5px 0px",
      alignItems: "center",
      width: `${width / 1.5}px`,
      backgroundColor: `${accent ? "#FF5A5F" : "transparent"}`,
    },
    Text: {
      fontSize: 14,
      fontWeight: "600",
      color: `${accent ? "white" : "gb(35, 35, 35)"}`,
    },
  });
