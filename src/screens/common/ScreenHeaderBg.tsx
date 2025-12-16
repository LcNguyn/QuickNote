import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import borderRadius from "../../../theme/borderRadius";
import { useTheme } from "../../hooks/useTheme";

const ScreenHeaderBg = () => {
  const theme = useTheme();
  return (
    <LinearGradient
      colors={theme.gradient.screenHeaderBg}
      locations={[0.0368, 0.9871]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0.2 }}
      style={{
        ...styles.container,
        borderBottomLeftRadius: borderRadius.lg,
        borderBottomRightRadius: borderRadius.lg,
      }}
    />
  );
};

export default ScreenHeaderBg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
