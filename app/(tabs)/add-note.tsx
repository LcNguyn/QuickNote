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
import ButtonTabBar from "../../src/screens/common/ButtonTabBar";
import { useTheme } from "../../src/hooks/useTheme";
import { addNote } from "../../src/redux/notesSlice";
import { AppDispatch } from "../../src/redux/store";
import { CATEGORIES, NoteCategory } from "../../src/types/note";
import borderRadius from "../../theme/borderRadius";
import CustomText from "../../src/components/CustomText";

export default function AddNoteScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
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
    setCategory(null);
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
          <View style={styles.innerContainer}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollContent}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.form}>
                <View style={styles.formInput}>
                  <DropDownPicker
                    textStyle={{ color: theme.colors.text }}
                    dropDownContainerStyle={{
                      backgroundColor: theme.colors.dropdownContainerBg,
                      borderColor: theme.colors.border,
                      borderRadius: borderRadius.lg,
                    }}
                    ArrowDownIconComponent={() => (
                      <Feather
                        name="chevron-down"
                        size={16}
                        color={theme.colors.icon}
                      />
                    )}
                    ArrowUpIconComponent={() => (
                      <Feather
                        name="chevron-up"
                        size={16}
                        color={theme.colors.icon}
                      />
                    )}
                    TickIconComponent={() => (
                      <Feather
                        name="check"
                        size={16}
                        color={theme.colors.icon}
                      />
                    )}
                    open={open}
                    value={category}
                    items={catItems}
                    setOpen={setOpen}
                    setValue={setCategory}
                    setItems={setCatItems}
                    style={{
                      ...styles.dropdown,
                      backgroundColor: theme.colors.containerBg,
                      borderColor: theme.colors.border,
                    }}
                    zIndex={1000}
                    zIndexInverse={3000}
                    placeholder="Select an item"
                  />

                  <TextInput
                    placeholder="Please input note content"
                    placeholderTextColor={theme.colors.text} // Semi-transparent white placeholder
                    style={{
                      ...styles.contentInput,
                      borderColor: theme.colors.border,
                      backgroundColor: theme.colors.containerBg,
                      color: theme.colors.text,
                    }}
                    value={content}
                    onChangeText={setContent}
                    multiline
                    textAlignVertical="top"
                    maxLength={200}
                  />
                  {/* Character left */}
                  <CustomText style={{ alignSelf: "flex-end" }}>
                    {200 - content.length} characters left
                  </CustomText>
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
    borderRadius: borderRadius.lg,
  },

  contentInput: {
    borderWidth: 1,
    borderRadius: borderRadius.lg,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    width: "100%",
    height: 334,
  },
  formInput: {
    flex: 1,
    width: "100%",
    padding: 16,
  },
  innerContainer: { flex: 1 },
});
