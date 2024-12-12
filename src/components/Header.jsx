import { useNotes } from "../context/NotesContext";

const Header = ({ onSort, sort }) => {
  const notes = useNotes()
  return (
    <div className="flex justify-around items-center border-b border- border-gray-700 mt-8 min-[0px]:max-[490px]:flex-col flex-wrap">
      <h1 className="font-header text-white mb-4 text-3xl min-[0px]:max-[485px]:text-2xl">
        My Note ({notes.length})
      </h1>
      <div className="mb-4 min-[0px]:max-[485px]:text-sm">
        <select
          name=""
          id=""
          className="pl-2 rounded-md mx-auto w-full border-2 border-gray-950 "
          value={sort}
          onChange={onSort}
        >
          <option value="latest">Sort based on latest</option>
          <option value="earliest">Sort based on earliest</option>
          <option value="completed">Sort based on completed</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
