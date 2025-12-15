import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SETTINGS } from "../types/note";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { deleteAllNotes } from "../redux/notesSlice";

const SettingsScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View>
      <FlatList
        data={SETTINGS}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CustomText>{item}</CustomText>}
      ></FlatList>
      {/* Delete all notes Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 10,
        }}
        onPress={() => dispatch(deleteAllNotes())}
      ></TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
