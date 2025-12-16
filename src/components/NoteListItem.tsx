import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Note } from "../types/note";
import CustomText from "./CustomText";
import NavListItem from "./NavListItem";

const NoteListItem = ({
  children,
  onPress,
}: {
  children: Note;
  onPress?: () => void;
}) => {
  return (
    <Pressable onPress={onPress}>
      <NavListItem>
        <CustomText>{children.title}</CustomText>
      </NavListItem>
    </Pressable>
  );
};

export default NoteListItem;

const styles = StyleSheet.create({});
