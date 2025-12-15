import React, { useEffect } from "react";
import {
  FlatList,
  SafeAreaViewBase,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { Note } from "../types/note";

const HomeScreen = () => {
  const { notes, loading } = useSelector((state: RootState) => state.notes);
  const [sections, setSections] = React.useState<
    { title: string; data: Note[] }[]
  >([]);

  useEffect(() => {
    const categorizedNotes: { [key: string]: Note[] } = {};

    const notesByCategory = notes.forEach((note) => {
      if (!categorizedNotes[note.category]) {
        categorizedNotes[note.category] = [];
      }
      categorizedNotes[note.category].push(note);
    });

    const newSections = Object.keys(categorizedNotes).map((category) => ({
      title: category,
      data: categorizedNotes[category],
    }));

    setSections(newSections);
  }, [notes]);

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      {/* <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <CustomText>{item.title}</CustomText>
            <CustomText>{item.content}</CustomText>
          </View>
        )}
      /> */}
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <CustomText>{item.title}</CustomText>
            <CustomText>{item.content}</CustomText>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <CustomText style={{ fontWeight: "bold", fontSize: 18 }}>
            {title}
          </CustomText>
        )}
      ></SectionList>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
