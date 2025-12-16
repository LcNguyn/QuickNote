import React from "react";
import { StyleSheet, View } from "react-native";
import BlurContainer from "./BlurContainer";
import RightArrow from "./customIcons/RightArrow";

const NavListItem = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: object;
}) => {
  return (
    <BlurContainer style={styles.wrapper}>
      <View style={[{ flex: 1 }, style]}>{children}</View>
      <RightArrow />
    </BlurContainer>
  );
};

export default NavListItem;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
});
