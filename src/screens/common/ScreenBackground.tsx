import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "../../hooks/useTheme";

const ScreenBackground = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: object;
}) => {
  const theme = useTheme();
  return (
    <LinearGradient
      colors={theme.gradient.screenBg}
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
