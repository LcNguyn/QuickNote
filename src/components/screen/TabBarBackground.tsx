import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import borderRadius from "../../../theme/borderRadius";
import { bottomTabBarHeight } from "../../../theme/screenLayout";

const TabBarBackground = ({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: object;
}) => {
  return (
    <LinearGradient
      colors={["#1C0B37", "#1D0837"]}
      locations={[0, 1]}
      style={{
        width: "100%",
        borderTopLeftRadius: borderRadius.lg,
        borderTopRightRadius: borderRadius.lg,
        height: bottomTabBarHeight,
        ...style,
      }}
    >
      {children}
    </LinearGradient>
  );
};

export default TabBarBackground;

const styles = StyleSheet.create({});
