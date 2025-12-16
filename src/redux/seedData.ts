import { Note, NoteCategory } from "../types/note";

const baseTime = Date.now();

export const seedNotes: {
  noteIds: string[];
  noteEntities: Record<string, Note>;
} = {
  noteIds: [],
  noteEntities: {},
};

const noteContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

// Helper
function createNote(
  offset: number,
  title: string,
  category: NoteCategory,
  isFavorite = false,
  hasUpdate = false
): Note {
  const createdAt = baseTime - offset * 60_000;
  return {
    id: createdAt.toString(),
    title,
    content: `Content for "${title}" \n ${noteContent}`,
    category,
    isFavorite,
    createdAt,
    updatedAt: hasUpdate ? createdAt + 30_000 : undefined,
  };
}

const notes: Note[] = [
  createNote(1, "Prepare weekly report", "Work and Study", true),
  createNote(2, "Review React Native basics", "Work and Study"),
  createNote(3, "Finish UI mockups", "Work and Study", true, true),
  createNote(4, "Plan learning roadmap", "Work and Study"),
  createNote(5, "Organize meeting notes", "Work and Study"),

  createNote(6, "Buy groceries", "Life"),
  createNote(7, "Clean workspace", "Life", true),
  createNote(8, "Plan weekend trip", "Life"),
  createNote(9, "Read a book", "Life", true, true),
  createNote(10, "Call family", "Life"),

  createNote(11, "Morning stretching routine", "Health and Wellness"),
  createNote(12, "Drink more water", "Health and Wellness"),
  createNote(13, "Gym push day plan", "Health and Wellness", true),
  createNote(14, "Track sleep quality", "Health and Wellness"),
  createNote(15, "Meal prep ideas", "Health and Wellness", true, true),

  createNote(16, "Refactor Redux selectors", "Work and Study"),
  createNote(17, "Journal daily thoughts", "Life"),
  createNote(18, "Meditation practice", "Health and Wellness"),
  createNote(19, "Prepare interview notes", "Work and Study", true),
  createNote(20, "Plan monthly goals", "Life"),
];

// Populate state
for (const note of notes) {
  seedNotes.noteIds.push(note.id);
  seedNotes.noteEntities[note.id] = note;
}
