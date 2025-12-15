import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomText = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: object;
}) => {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#fff",
  },
});
