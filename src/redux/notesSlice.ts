import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewNotePayload, Note } from "../types/note";

interface NotesState {
  notes: Note[];
  loading: boolean;
  error: string | null;
}

const initialState: NotesState = {
  notes: [],
  loading: false,
  error: null,
};

export const loadNotes = createAsyncThunk("notes/loadNotes", async () => {
  // Simulate loading notes from persistent storage
  const storedNotes = await AsyncStorage.getItem("notes");
  return storedNotes ? JSON.parse(storedNotes) : [];
});

export const addNote = createAsyncThunk(
  "notes/addNote",
  async (newNote: NewNotePayload, { getState }) => {
    const note: Note = {
      id: Date.now().toString(),
      title: newNote.content.slice(0, 20), // Example: first 20 chars as title
      content: newNote.content,
      category: newNote.category,
      isFavorite: false,
      createdAt: Date.now(),
    };
    const state = getState() as { notes: NotesState };
    const updatedNotes = [...state.notes.notes, note];
    await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes));
    return note;
  }
);

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    deleteAllNotes: (state) => {
      state.notes = [];
      AsyncStorage.removeItem("notes");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadNotes.fulfilled, (state, action: PayloadAction<Note[]>) => {
        state.loading = false;
        state.notes = action.payload;
      })
      .addCase(loadNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load notes";
      })
      .addCase(addNote.fulfilled, (state, action: PayloadAction<Note>) => {
        state.notes.push(action.payload);
      });
  },
});

export const { deleteNote, deleteAllNotes } = notesSlice.actions;
export default notesSlice.reducer;
