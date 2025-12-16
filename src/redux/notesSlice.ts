import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewNotePayload, Note } from "../types/note";
import { seedNotes } from "./seedData";

interface NotesState {
  noteIds: string[];
  noteEntities: Record<string, Note>;
  loading: boolean;
  error: string | null;
}

const initialState: NotesState = {
  noteIds: [],
  noteEntities: {},
  loading: false,
  error: null,
};

export const loadNotes = createAsyncThunk("notes/loadNotes", async () => {
  // Simulate loading notes from persistent storage
  // const storedNotes = await AsyncStorage.getItem("notes");
  const storedNotes = null;

  //Seed data for testing
  const seedData = {
    noteIds: seedNotes.noteIds,
    noteEntities: seedNotes.noteEntities,
  };

  return storedNotes
    ? JSON.parse(storedNotes)
    : // : { noteIds: [], noteEntities: {} };
      seedData;
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
    const updatedNoteIds = [...state.notes.noteIds, note.id];
    const updatedNoteEntities = {
      ...state.notes.noteEntities,
      [note.id]: note,
    };
    await AsyncStorage.setItem(
      "notes",
      JSON.stringify({
        noteIds: updatedNoteIds,
        noteEntities: updatedNoteEntities,
      })
    );
    return note;
  }
);

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    deleteNote: (state, action: PayloadAction<string>) => {
      state.noteIds = state.noteIds.filter((id) => id !== action.payload);
      delete state.noteEntities[action.payload];
    },
    deleteAllNotes: (state) => {
      state.noteIds = [];
      state.noteEntities = {};
      AsyncStorage.removeItem("notes");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        loadNotes.fulfilled,
        (
          state,
          action: PayloadAction<{
            noteIds: string[];
            noteEntities: Record<string, Note>;
          }>
        ) => {
          state.loading = false;
          state.noteIds = action.payload.noteIds;
          state.noteEntities = action.payload.noteEntities;
        }
      )
      .addCase(loadNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load notes";
      })
      .addCase(addNote.fulfilled, (state, action: PayloadAction<Note>) => {
        state.noteIds.push(action.payload.id);
        state.noteEntities[action.payload.id] = action.payload;
      });
  },
});

export const { deleteNote, deleteAllNotes } = notesSlice.actions;
export default notesSlice.reducer;
