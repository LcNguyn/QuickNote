import React from "react";
import { StyleSheet, View } from "react-native";
import { Note } from "../types/note";
import CustomText from "./CustomText";
import RightArrow from "./RightArrow";
import BlurContainer from "./BlurContainer";
import NavListItem from "./NavListItem";

const NoteListItem = ({ note }: { note: Note }) => {
  return (
    <NavListItem>
      <CustomText>
        {note.content.length > 20 ? note.content.slice(0, 20) : note.content}
      </CustomText>
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
