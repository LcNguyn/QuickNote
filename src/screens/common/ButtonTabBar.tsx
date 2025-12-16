import React from "react";
import { StyleSheet } from "react-native";
import PinkyButton from "../../components/PinkyButton";
import TabBarBackground from "./TabBarBackground";
import { useTheme } from "../../hooks/useTheme";

const ButtonTabBar = ({
  label,
  onPress,
  style,
}: {
  label: string;
  onPress: () => void;
  style?: object;
}) => {
  const theme = useTheme();
  return (
    <TabBarBackground
      style={{ ...styles.container, height: theme.tabBarHeight, ...style }}
    >
      <PinkyButton label={label} onPress={onPress} size="lg"></PinkyButton>
    </TabBarBackground>
  );
};

export default ButtonTabBar;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
