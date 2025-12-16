import { StyleSheet, Text, View } from "react-native";
import React from "react";
import borderRadius from "../../theme/borderRadius";

const BlurContainer = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: object;
}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default BlurContainer;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF1F",
    backgroundColor: "#ffffff19",
    borderRadius: borderRadius.lg,
  },
});
