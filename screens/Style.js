import { StyleSheet, Dimensions } from "react-native";

//Screen > Auth > welcome
export const Auth_welcomeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: "absolute",
    zIndex: 1,
    top: 0,
  },
  logo: {
    marginTop: 50,
    width: 100,
    height: 100,
  },
  btnContainer: {
    marginTop: 40,
  },
});

//Screen > Auth > SignIn
export const Auth_SignInStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: 30,
  },
});

//Screen > Auth > SignUp
export const Auth_SignUpStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  InputContainer: {
    marginBottom: 30,
  },
});

export const Auth_Input = (width) =>
  StyleSheet.create({
    container: {
      width: `${width / 1.5}px`,
      padding: "12.5px 20px",
      // border: "1px solid grey",
      borderWidth: 1,
      // borderColor: "black",
      backgroundColor: "white",
      borderRadius: "30px",
      marginBottom: "10px",
      fontWeight: "500px",
    },
  });

const styles = StyleSheet.create({
  BackGroundImage: {
    width: "100%",
    height: "100%",
    opacity: 0.4,
    position: "absolute",
  },
  Headers: {
    height: `${Dimensions.get("window").height / 3}px`,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default styles;
