import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { LinearGradient } from "expo-linear-gradient";
import borderRadius from "../../theme/borderRadius";

const PinkyButton = ({
  label,
  onPress,
  size = "md",
}: {
  label: string;
  onPress: () => void;
  size: "xs" | "sm" | "md" | "lg";
}) => {
  let buttonWidth;

  switch (size) {
    case "xs":
    default:
      buttonWidth = 70;
      break;
    case "sm":
      buttonWidth = 120;
      break;
    case "md":
      buttonWidth = 160;
      break;
    case "lg":
      buttonWidth = 200;
      break;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["#F94695", "#F13A76"]}
        locations={[0, 1]}
        style={[styles.button, { width: buttonWidth }]}
      >
        <CustomText>{label}</CustomText>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PinkyButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: borderRadius.lg,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 34,
  },
});
