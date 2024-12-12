import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const notesDispatchContext = createContext(null);

function notesReducer(notes, { type, payload }) {
  switch (type) {
    case "addNote": {
      return [...notes, payload];
    }
    case "removeNote": {
      return notes.filter((notes) => notes.id !== payload);
    }
    case "completeNote": {
      return notes.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    }
    default:
      throw new Error("unknown error" + type);
  }
}

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={notes}>
      <notesDispatchContext.Provider value={dispatch}>
        {children}
      </notesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
  return useContext(notesDispatchContext);
}
