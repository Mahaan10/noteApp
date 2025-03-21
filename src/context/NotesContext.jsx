import { createContext, useContext, useEffect, useReducer } from "react";

const NotesContext = createContext(null);
const notesDispatchContext = createContext(null);

function notesReducer(notes, { type, payload }) {
  switch (type) {
    case "addNote": {
      const updatedNotes = [...notes, payload];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    }
    case "removeNote": {
      const updatedNotes = notes.filter((notes) => notes.id !== payload);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    }
    case "completeNote": {
      const updatedNotes = notes.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    }
    default:
      throw new Error("unknown error" + type);
  }
}

export function NotesProvider({ children }) {
  const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  const [notes, dispatch] = useReducer(notesReducer, storedNotes);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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
