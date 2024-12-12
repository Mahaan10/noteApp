import { useNotes, useNotesDispatch } from "../context/NotesContext";

const NoteList = ({ sort }) => {
  const notes = useNotes();
  let sortedNotes = notes;
  sort === "earliest"
    ? (sortedNotes = [...notes].sort(
        (a, b) => new Date(a.time) - new Date(b.time)
      ))
    : sort === "latest"
    ? (sortedNotes = [...notes].sort(
        (a, b) => new Date(b.time) - new Date(a.time)
      ))
    : (sortedNotes = [...notes].sort(
        (a, b) => Number(b.completed) - Number(a.completed)
      ));

  return (
    <div className="flex w-4/6 mx-auto min-[0px]:max-[608px]:w-full">
      <div className="flex-col gap-4 w-full min-[0px]:max-[608px]:text-sm flex">
        <NoteStatus />
        <ul className="list-none flex flex-col gap-4">
          {sortedNotes.map((note) => (
            <NoteItem key={note.id} notes={note} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const NoteItem = ({ notes }) => {
  const dispatch = useNotesDispatch();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <li className="flex flex-col bg-indigo-200 p-2 gap-1">
      <p className={`${notes.completed ? "opacity-20 line-through" : ""}`}>
        {notes.title}
      </p>
      <div className="flex justify-between items-center">
        <span className="opacity-50">{notes.desc}</span>
        <div className="flex items-center gap-1">
          <button
            className="text-xs text-red-800"
            onClick={() => dispatch({ type: "removeNote", payload: notes.id })}
          >
            <i className="fa fa-trash"></i>
          </button>
          <input
            type="checkbox"
            name={notes.title}
            id={notes.id}
            value={notes.id}
            className="accent-green-800 cursor-pointer"
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "completeNote", payload: noteId });
            }}
          />
        </div>
      </div>
      <div className="opacity-50">
        <span className="text-xs">
          {new Date(notes.time).toLocaleString("en-US", options)}
        </span>
      </div>
    </li>
  );
};

const NoteStatus = () => {
  const notes = useNotes();
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const openNotes = allNotes - completedNotes;

  if (!allNotes)
    return (
      <div className="w-full">
        <h1 className="text-center text-white text-xl min-[0px]:max-[608px]:text-lg">
          No Notes has been added!
        </h1>
      </div>
    );

  return (
    <div className="flex justify-between items-center">
      <button className="text-slate-300 hover:text-white">
        All
        <span className="bg-gray-700 rounded-md px-1 text-sm">{allNotes}</span>
      </button>
      <button className="text-slate-300 hover:text-white">
        Completed
        <span className="bg-gray-700 rounded-md px-1 text-sm ml-1">
          {completedNotes}
        </span>
      </button>
      <button className="text-slate-300 hover:text-white">
        Open
        <span className="bg-gray-700 rounded-md px-1 text-sm">{openNotes}</span>
      </button>
    </div>
  );
};

export default NoteList;
