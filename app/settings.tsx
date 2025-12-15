import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import CustomText from "../src/components/CustomText";
import { deleteAllNotes } from "../src/redux/notesSlice";
import { AppDispatch } from "../src/redux/store";
import { SETTINGS } from "../src/types/note";

const SettingsScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
      >
        <CustomText style={{ color: "white", textAlign: "center" }}>
          Delete all notes
        </CustomText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
