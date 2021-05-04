import React from "react";
import {
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import PropTypes from "prop-types";
import { Auth_Btn } from "../style";

const { width } = Dimensions.get("screen");

const Btn = ({ loading = false, onPress, text, accent = false }) => (
  <TouchableOpacity onPress={loading ? null : onPress}>
    <View style={Auth_Btn(width, accent).button}>
      {loading ? (
        <ActivityIndicator color={loading ? "white" : "black"} />
      ) : (
        <Text style={Auth_Btn(width, accent).Text} accent={accent}>
          {text}
        </Text>
      )}
    </View>
  </TouchableOpacity>
);

Btn.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  accent: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Btn;
