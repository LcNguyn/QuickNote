import React from "react";
import { StyleSheet, Text } from "react-native";
import { TextVariant, textVariants } from "../../theme/typography";

const CustomText = ({
  children,
  style,
  variant,
}: {
  children: React.ReactNode;
  style?: object;
  variant?: TextVariant;
}) => {
  const variantStyles = textVariants[variant || "body"];

  return <Text style={[styles.text, style, variantStyles]}>{children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#fff",
  },
});
