import React from "react";
import { StyleSheet } from "react-native";
import { bottomTabBarHeight } from "../../../theme/screenLayout";
import PinkyButton from "../PinkyButton";
import TabBarBackground from "./TabBarBackground";

const ButtonTabBar = ({
  label,
  onPress,
  style,
}: {
  label: string;
  onPress: () => void;
  style?: object;
}) => {
  return (
    <TabBarBackground style={{ ...styles.container, ...style }}>
      <PinkyButton label={label} onPress={onPress} size="lg"></PinkyButton>
    </TabBarBackground>
  );
};

export default ButtonTabBar;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: bottomTabBarHeight,
  },
});
