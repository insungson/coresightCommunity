import React, { useLayoutEffect, useEffect } from "react";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Recommends from "../screens/Main/Recommends";
import Communities from "../screens/Main/Communities";
import Chatting from "../screens/Main/Chatting";
import Shopping from "../screens/Main/Shopping";

const Main = createBottomTabNavigator();

const getHeaderName = (route) => {
  return getFocusedRouteNameFromRoute(route) ?? "LogIn";
};

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    if (route) {
      const name = getHeaderName(route);
      navigation.setOptions({
        title: name,
      });
    }
  }, [route]);
  return (
    <Main.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Recommends") {
            return (
              <AntDesign
                name="staro"
                size={26}
                color={focused ? "white" : "gray"}
              />
            );
          } else if (route.name === "Communities") {
            return (
              <Ionicons
                name="md-people-outline"
                size={26}
                color={focused ? "white" : "gray"}
              />
            );
          } else if (route.name === "Chatting") {
            return (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={26}
                color={focused ? "white" : "gray"}
              />
            );
          } else if (route.name === "Shopping") {
            return (
              <FontAwesome5
                name="shopify"
                size={26}
                color={focused ? "white" : "gray"}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Main.Screen name="Recommends" component={Recommends} />
      <Main.Screen name="Communities" component={Communities} />
      <Main.Screen name="Chatting" component={Chatting} />
      <Main.Screen name="Shopping" component={Shopping} />
    </Main.Navigator>
  );
};
