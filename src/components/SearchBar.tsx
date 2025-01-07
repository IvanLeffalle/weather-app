import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  return (
    <div className="bg-white border border-slate-500 rounded-lg flex items-center w-[300px] h-[50px] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
      <label htmlFor="search" className="sr-only">
        Buscar
      </label>
      <AiOutlineSearch className="m-2 text-slate-500" aria-hidden="true" />
      <input
        type="text"
        id="search"
        className="p-2 w-full focus:outline-none rounded-lg"
        placeholder="Search"
        aria-label="Buscar"
      />
    </div>
  );
}
