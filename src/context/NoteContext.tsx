// import React, { useEffect } from "react";
// import { NewNotePayload, Note } from "../types/note";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../redux/store";
// import { loadNotes } from "../redux/notesSlice";

// interface Props {
//   children: React.ReactNode;
// }

// interface NoteContextType {
//   notes: Note[];
//   addNote: (newNote: NewNotePayload) => void;
//   removeNote: (id: string) => void;
// }

// const NoteContext = React.createContext<NoteContextType | undefined>(undefined);

// export const NoteProvider = ({ children }: Props) => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { notes, loading } = useSelector((state: RootState) => state);
//   // const [notes, setNotes] = React.useState<Note[]>([]);

//   useEffect(() => {
//     // Load notes from async storage when app starts
//     // const loadNotes = async () => {
//     //   try {
//     //     const storedNotes = await AsyncStorage.getItem("notes");
//     //     if (storedNotes) {
//     //       setNotes(JSON.parse(storedNotes));
//     //     }
//     //   } catch (error) {
//     //     console.error("Failed to load notes from storage", error);
//     //   }
//     // };

//     // loadNotes();
//     dispatch(loadNotes());
//   }, []);

//   return (
//     <NoteContext.Provider value={{ notes, addNote, removeNote: () => {} }}>
//       {children}
//     </NoteContext.Provider>
//   );
// };

// export const useNoteContext = () => {
//   const context = React.useContext(NoteContext);
//   if (!context) {
//     throw new Error("useNoteContext must be used within a NoteProvider");
//   }
//   return context;
// };
