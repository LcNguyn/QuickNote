import React, { useCallback, useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { addNote } from "../../src/redux/notesSlice";
import { AppDispatch } from "../../src/redux/store";
import { CATEGORIES, NoteCategory } from "../../src/types/note";
import CustomText from "../../src/components/CustomText";

export default function AddNoteScreen() {
  const dispatch = useDispatch<AppDispatch>();
  // const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<NoteCategory>(CATEGORIES[0]);
  const [catItems, setCatItems] = useState(
    CATEGORIES.map((cat) => ({ label: cat, value: cat }))
  );

  const handleSaveNote = useCallback(() => {
    if (!category) {
      Alert.alert("Error", "Please select a category");
      return;
    }

    dispatch(addNote({ content: content.trim(), category }));

    // Clear form after saving
    // setTitle("");
    setContent("");

    Alert.alert("Success", "Note saved successfully!");
  }, [dispatch, content, category]);

  const dismissKeyboard = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          {/* <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          > */}
          <View style={styles.form}>
            <DropDownPicker
              open={open}
              value={category}
              items={catItems}
              setOpen={setOpen}
              setValue={setCategory}
              setItems={setCatItems}
              style={styles.dropdown}
              zIndex={1000}
              zIndexInverse={3000}
            />

            <TextInput
              placeholder="Add your note here..."
              style={styles.contentInput}
              value={content}
              onChangeText={setContent}
              multiline
              textAlignVertical="top"
              maxLength={5000}
            />

            <TouchableOpacity
              style={[
                styles.saveButton,
                !category && styles.saveButtonDisabled,
              ]}
              onPress={handleSaveNote}
              disabled={!category}
            >
              <CustomText>Save Note</CustomText>
            </TouchableOpacity>
          </View>
          {/* </ScrollView> */}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  form: {
    flex: 1,
    padding: 16,
  },
  dropdown: {
    marginBottom: 16,
  },
  titleInput: {
    height: 50,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: "#fafafa",
  },
  contentInput: {
    // minHeight: 200,
    // maxHeight: 400,
    flex: 1,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: "#fafafa",
  },
  doneButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 16,
  },
  doneButtonText: {
    color: "#007AFF",
    fontSize: 14,
    fontWeight: "500",
  },
  saveButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20, // Extra margin for keyboard
  },
  saveButtonDisabled: {
    backgroundColor: "#ccc",
  },
});
