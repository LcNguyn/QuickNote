import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ScreenBackground = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: object;
}) => {
  return (
    <LinearGradient
      colors={["#1B284F", "#351159", "#421C45", "#3B184E"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.container, style]}
    >
      {children}
    </LinearGradient>
  );
};

export default ScreenBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
