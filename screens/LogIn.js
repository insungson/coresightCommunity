import React from "react";
import { View, Text, Button } from "react-native";
import styles from './Style';

export default ({ navigation }) => {
  console.log("navigation: ", navigation);
  console.log('navigation.navigate("Tabs"): ', navigation.navigate("Tabs"));
  return (
    <View>
      <Text>LogIn</Text>
      <Button
        onPress={() => navigation.navigate("Tabs")}
        title="Go to coresightCommunities"
      />
    </View>
  );
};