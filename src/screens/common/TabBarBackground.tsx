import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import borderRadius from "../../../theme/borderRadius";
import { useTheme } from "../../hooks/useTheme";

const TabBarBackground = ({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: object;
}) => {
  const theme = useTheme();
  return (
    <LinearGradient
      colors={theme.gradient.tabBarBg}
      locations={[0, 1]}
      style={{
        ...styles.container,
        borderTopLeftRadius: borderRadius.lg,
        borderTopRightRadius: borderRadius.lg,
        height: theme.tabBarHeight,
        ...style,
      }}
    >
      {children}
    </LinearGradient>
  );
};

export default TabBarBackground;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
