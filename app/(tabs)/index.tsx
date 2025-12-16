import React, { useEffect } from "react";
import { SectionList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import NoteListItem from "../../src/components/NoteListItem";
import { useTheme } from "../../src/hooks/useTheme";
import { RootState } from "../../src/redux/store";
import CategoryHeader from "../../src/screens/Home/components/CategoryHeader";
import EmptyListMessage from "../../src/screens/Home/components/EmptyListMessage";
import RecentCreated from "../../src/screens/Home/components/RecentCreated";
import { Note, NoteCategory } from "../../src/types/note";

const HomeScreen = () => {
  const { noteIds, noteEntities, loading } = useSelector(
    (state: RootState) => state.notes
  );
  const [sections, setSections] = React.useState<
    { title: NoteCategory; data: Note[] }[]
  >([]);

  useEffect(() => {
    const categorized: Record<NoteCategory, Note[]> = {
      "Work and Study": [],
      Life: [],
      "Health and Wellness": [],
    };

    for (const id of noteIds) {
      const note = noteEntities[id];
      if (!note) continue;

      const displayArr = categorized[note.category];

      if (displayArr.length < 3) {
        displayArr.push(note);
      } else {
        let oldest = 0;
        for (let i = 1; i < displayArr.length; i++) {
          if (displayArr[i].createdAt < displayArr[oldest].createdAt)
            oldest = i;
        }
        if (note.createdAt > displayArr[oldest].createdAt) {
          displayArr[oldest] = note;
        }
      }
    }

    const newSections = Object.keys(categorized).map((category) => ({
      title: category as NoteCategory,
      data: categorized[category as NoteCategory].sort(
        (a, b) => b.createdAt - a.createdAt
      ),
    }));

    setSections(newSections);
  }, [noteIds, noteEntities]);

  return (
    <View style={styles.wrapper}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NoteListItem>{item}</NoteListItem>}
        renderSectionFooter={({ section }) => (
          <EmptyListMessage section={section} />
        )}
        renderSectionHeader={({ section }) => (
          <CategoryHeader section={section} />
        )}
        contentContainerStyle={{ gap: 12 }}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <RecentCreated />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 16,
  },
});
