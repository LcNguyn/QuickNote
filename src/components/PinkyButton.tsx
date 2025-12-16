import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import borderRadius from "../../theme/borderRadius";
import { useTheme } from "../hooks/useTheme";
import CustomText from "./CustomText";

const PinkyButton = ({
  label,
  onPress,
  size = "md",
}: {
  label: string;
  onPress: () => void;
  size?: "xs" | "sm" | "md" | "lg";
}) => {
  const theme = useTheme();
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
        colors={theme.gradient.primaryBtn}
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
