export type NoteCategory =
  | "Work and Study"
  | "Life"
  | "Health and Wellness"
  | "Others";

export const CATEGORIES: NoteCategory[] = [
  "Work and Study",
  "Life",
  "Health and Wellness",
  "Others",
];

export const SETTINGS: string[] = [
  "Online Customer",
  "User Agreement",
  "Privacy Policy",
  "About Us",
];

export interface Note {
  id: string;
  title: string;
  content: string;
  category: NoteCategory;
  isFavorite: boolean;
  createdAt: number;
  updatedAt?: number;
}

export type NewNotePayload = Omit<
  Note,
  "id" | "createdAt" | "updatedAt" | "isFavorite" | "title"
>;

// Payload for updating a note; all fields optional except id
export type UpdateNotePayload = Partial<Omit<Note, "id" | "createdAt">> & {
  id: string;
};
