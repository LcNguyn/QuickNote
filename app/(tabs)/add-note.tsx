import { Feather } from "@expo/vector-icons";
import React, { useCallback, useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch } from "react-redux";
import ButtonTabBar from "../../src/components/screen/ButtonTabBar";
import { addNote } from "../../src/redux/notesSlice";
import { AppDispatch } from "../../src/redux/store";
import { CATEGORIES, NoteCategory } from "../../src/types/note";
import borderRadius from "../../theme/borderRadius";

export default function AddNoteScreen() {
  const dispatch = useDispatch<AppDispatch>();
  // const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<NoteCategory | null>(null);
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

  const onPressSave = () => {
    if (!category) {
      Alert.alert("Error", "Please select a category");
      return;
    }
    if (content.trim() === "") {
      Alert.alert("Error", "Note content cannot be empty");
      return;
    }
    handleSaveNote();
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View style={{ flex: 1 }}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollContent}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.form}>
                <View style={{ flex: 1, width: "100%", padding: 16 }}>
                  <DropDownPicker
                    textStyle={{ color: "#fff" }}
                    dropDownContainerStyle={{
                      backgroundColor: "#58327eff",
                      borderColor: "#FFFFFF1F",
                      borderRadius: borderRadius.lg,
                    }}
                    ArrowDownIconComponent={() => (
                      <Feather name="chevron-down" size={16} color="#fff" />
                    )}
                    ArrowUpIconComponent={() => (
                      <Feather name="chevron-up" size={16} color="#fff" />
                    )}
                    TickIconComponent={() => (
                      <Feather name="check" size={16} color="#fff" />
                    )}
                    open={open}
                    value={category}
                    items={catItems}
                    setOpen={setOpen}
                    setValue={setCategory}
                    setItems={setCatItems}
                    style={styles.dropdown}
                    zIndex={1000}
                    zIndexInverse={3000}
                    placeholder="Select an item"
                  />

                  <TextInput
                    placeholder="Please input note content"
                    placeholderTextColor="#fff" // Semi-transparent white placeholder
                    style={styles.contentInput}
                    value={content}
                    onChangeText={setContent}
                    multiline
                    textAlignVertical="top"
                    maxLength={5000}
                  />
                </View>
              </View>
            </ScrollView>
            <ButtonTabBar label="Save" onPress={onPressSave} />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    alignItems: "center",
  },
  dropdown: {
    marginBottom: 16,
    borderColor: "#FFFFFF1F",
    backgroundColor: "#ffffff19",
    color: "#fff",
    borderRadius: borderRadius.lg,
  },
  titleInput: {
    height: 50,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: borderRadius.lg,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: "#fafafa",
  },
  contentInput: {
    borderColor: "#FFFFFF1F",
    borderWidth: 1,
    borderRadius: borderRadius.lg,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: "#ffffff19", // Semi-transparent background
    color: "#fff", // White text color
    width: "100%",
    height: 334,
  },
  doneButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    borderRadius: borderRadius.lg,
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
    borderRadius: borderRadius.lg,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20, // Extra margin for keyboard
  },
  saveButtonDisabled: {
    backgroundColor: "#ccc",
  },
});
