import { useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Input";
import NoteList from "./components/NoteList";
import { NotesProvider } from "./context/NotesContext";

function App() {
  const [sort, setSort] = useState("latest");

  const sortHandler = (event) => setSort(event.target.value);

  return (
    <NotesProvider>
      <div className="">
        <Header sort={sort} onSort={sortHandler} />
        <div className="flex justify-center min-[0px]:max-[490px]:flex-col flex-wrap mt-5 min-[0px]:max-[608px]:gap-2">
          <Inputs />
          <NoteList sort={sort} setSort={setSort} />
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
