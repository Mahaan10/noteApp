import { useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Input";
import NoteList from "./components/NoteList";
import { NotesProvider } from "./context/NotesContext";

function App() {
  //const [notes, setNotes] = useState([]);
  const [sort, SetSort] = useState("latest");

  const sortHandler = (event) => SetSort(event.target.value);

  /* const handleOnAddNote = (newNote) => {
    dispatch({ type: "addNote", payload: newNote });
  }; */

  /*   const handleRemoveNote = (id) => {
    dispatch({ type: "removeNote", payload: id });
  }; */

  /*   const handleCompleteNote = (event) => {
    const noteId = Number(event.target.value);
    dispatch({ type: "completeNote", payload: noteId });
  }; */

  /*   const handleOnAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }; */

  /*   const handleRemoveNote = (id) => {
     Filter Method

    const noteFilter = notes.filter(note => note.id !== id)
    setNotes(noteFilter)

    Advance Method (callback function)

    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }; */

  /*   const handleCompleteNote = (event) => {
    const noteId = Number(event.target.value);

     Map Method

     const newNotes = notes.map(note => 
      note.id === noteId ? {... note, completed : !note.completed} : note
    )
    setNotes(newNotes) 

     Advance Method (callback function)

     setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
 };
 */
  return (
    <NotesProvider>
      <div className="">
        <Header sort={sort} onSort={sortHandler} />
        <div className="flex justify-center min-[0px]:max-[490px]:flex-col flex-wrap mt-5 min-[0px]:max-[608px]:gap-2">
          <Inputs />
          <NoteList sort={sort} />
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
