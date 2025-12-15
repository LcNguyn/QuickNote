import React, { useEffect } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { RootState } from "../../src/redux/store";
import { Note } from "../../src/types/note";
import ListItem from "../../src/components/ListItem";
import CustomText from "../../src/components/CustomText";

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
    <LinearGradient
      colors={["#1B284F", "#351159", "#421C45", "#3B184E"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.wrapper}
    >
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem note={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <CustomText>{title}</CustomText>
          )}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
