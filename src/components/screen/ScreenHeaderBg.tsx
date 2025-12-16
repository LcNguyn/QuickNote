import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import borderRadius from "../../../theme/borderRadius";

const ScreenHeaderBg = () => {
  return (
    <LinearGradient
      colors={["#280947", "#280841"]}
      locations={[0.0368, 0.9871]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0.2 }}
      style={{
        flex: 1,
        borderBottomLeftRadius: borderRadius.lg,
        borderBottomRightRadius: borderRadius.lg,
      }}
    />
  );
};

export default ScreenHeaderBg;

const styles = StyleSheet.create({});
