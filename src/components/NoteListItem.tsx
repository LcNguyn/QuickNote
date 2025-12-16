import React from "react";
import { StyleSheet } from "react-native";
import { Note } from "../types/note";
import CustomText from "./CustomText";
import NavListItem from "./NavListItem";

const NoteListItem = ({ children }: { children: Note }) => {
  return (
    <NavListItem>
      <CustomText>{children.title}</CustomText>
    </NavListItem>
  );
};

export default NoteListItem;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    gap: 40, // Move gap after flexDirection and alignItems
  },
});
