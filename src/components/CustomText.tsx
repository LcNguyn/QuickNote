import React from "react";
import { StyleSheet, Text } from "react-native";
import { textVariants } from "../../theme/typography";
import { useTheme } from "../hooks/useTheme";
import { TextVariant } from "../types/theme/font";

const CustomText = ({
  children,
  style,
  variant,
}: {
  children: React.ReactNode;
  style?: object;
  variant?: TextVariant;
}) => {
  const theme = useTheme();
  const variantStyles = textVariants[variant || "body"];

  return (
    <Text
      style={[styles.text, { color: theme.colors.text }, variantStyles, style]}
    >
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
