import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Note } from "../types/note";
import CustomText from "./CustomText";

const ListItem = ({ note }: { note: Note }) => {
  const title =
    note.content.length > 30 ? note.content.slice(0, 20) + "..." : note.content;
  return (
    <View style={{ paddingVertical: 8, flexDirection: "row" }}>
      <CustomText style>{title}</CustomText>
      <Ionicons name="chevron-forward-outline" size={16} color="#888" />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
