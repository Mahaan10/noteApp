import { useState } from "react";
import { useNotesDispatch } from "../context/NotesContext";

const Inputs = () => {
  const dispatch = useNotesDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let newNote = {
      id: Date.now(),
      title,
      desc,
      completed: false,
      time: new Date().toISOString(),
    };

    setTitle("");
    setDesc("");
    dispatch({ type: "addNote", payload: newNote });
  };

  const titleChangeHandler = (event) => setTitle(event.target.value);

  const descChangeHandler = (event) => setDesc(event.target.value);

  return (
    <div className="flex flex-col gap-4 w-2/6 mx-auto min-[0px]:max-[608px]:w-full">
      <h1 className="text-white text-2xl text-center w-4/5 min-[0px]:max-[803px]:text-wrap min-[0px]:max-[803px]:text-lg min-[0px]:max-[608px]:w-full">
        Add Note List
      </h1>
      <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Note title..."
          className="placeholder-shown:px-1 py-1 w-4/5 min-[0px]:max-[803px]:placeholder-shown:text-sm min-[0px]:max-[608px]:w-full "
          value={title}
          onChange={titleChangeHandler}
        />
        <input
          type="text"
          placeholder="Note descreption..."
          className="placeholder-shown:px-1 py-1 w-4/5 min-[0px]:max-[803px]:placeholder-shown:text-sm min-[0px]:max-[608px]:w-full "
          value={desc}
          onChange={descChangeHandler}
        />
        <button
          type="submit"
          className="text-white bg-emerald-950 w-4/5 py-1 hover:bg-emerald-900 min-[0px]:max-[608px]:w-full"
        >
          Add New Note
        </button>
      </form>
    </div>
  );
};

export default Inputs;
