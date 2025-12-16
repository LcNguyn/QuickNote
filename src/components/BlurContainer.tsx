import React from "react";
import { StyleSheet, View } from "react-native";
import borderRadius from "../../theme/borderRadius";
import { useTheme } from "../hooks/useTheme";

const BlurContainer = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: object;
}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.containerBg,
        borderColor: theme.colors.border,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default BlurContainer;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: borderRadius.lg,
  },
});
