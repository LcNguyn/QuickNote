import React from "react";
import { StyleSheet, View } from "react-native";
import { Note } from "../types/note";
import CustomText from "./CustomText";
import RightArrow from "./RightArrow";
import BlurContainer from "./BlurContainer";

const NavListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <BlurContainer style={styles.wrapper}>
      <View style={{ flex: 1 }}>{children}</View>
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
