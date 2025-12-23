import React, { useEffect } from "react";
import { SectionList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import NoteListItem from "../../src/components/NoteListItem";
import { useTheme } from "../../src/hooks/useTheme";
import { AppDispatch, RootState } from "../../src/redux/store";
import CategoryHeader from "../../src/screens/Home/components/CategoryHeader";
import EmptyListMessage from "../../src/screens/Home/components/EmptyListMessage";
import RecentCreated from "../../src/screens/Home/components/RecentCreated";
import { Note, NoteCategory } from "../../src/types/note";
import PinkyButton from "../../src/components/PinkyButton";
import Modal from "../../src/components/modal";
import { deleteNote } from "../../src/redux/notesSlice";

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { noteIds, noteEntities, loading } = useSelector(
    (state: RootState) => state.notes
  );
  const [sections, setSections] = React.useState<
    { title: NoteCategory; data: Note[] }[]
  >([]);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedNoteId, setSelectedNoteId] = React.useState<string | null>(
    null
  );

  useEffect(() => {
    const categorized: Record<NoteCategory, Note[]> = {
      "Work and Study": [],
      Life: [],
      "Health and Wellness": [],
    };

    // First, group all notes by category
    for (const id of noteIds) {
      const note = noteEntities[id];
      if (!note) continue;
      categorized[note.category].push(note);
    }

    // Then sort each category and take the 3 most recent notes
    const newSections = Object.keys(categorized).map((category) => ({
      title: category as NoteCategory,
      data: categorized[category as NoteCategory]
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(0, 3),
    }));

    setSections(newSections);
  }, [noteIds, noteEntities]);

  const onPressShowNoteDetails = (noteId: string) => {
    setSelectedNoteId(noteId);
    setModalVisible(true);
  };

  const onPressDeleteNotes = () => {
    // Implement delete note logic here
    dispatch(deleteNote(selectedNoteId!));
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.wrapper}>
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NoteListItem
              onPress={() => {
                onPressShowNoteDetails(item.id);
              }}
            >
              {item}
            </NoteListItem>
          )}
          renderSectionFooter={({ section }) => (
            <EmptyListMessage section={section} />
          )}
          renderSectionHeader={({ section }) => (
            <CategoryHeader section={section} />
          )}
          contentContainerStyle={{ gap: 12, paddingTop: 20 }}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <RecentCreated />}
        />
      </View>
      <Modal
        visible={modalVisible}
        title={
          selectedNoteId && noteEntities[selectedNoteId]?.title
            ? noteEntities[selectedNoteId]?.title
            : "Note Details"
        }
        content={
          selectedNoteId && noteEntities[selectedNoteId]?.content
            ? noteEntities[selectedNoteId]?.content
            : ""
        }
        confirmLabel="Delete Note"
        setModalVisible={setModalVisible}
        onConfirm={onPressDeleteNotes}
        cancellable={true}
      />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 16,
  },
});
