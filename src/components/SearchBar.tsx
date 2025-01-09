import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";


interface SearchBarProps{
  onSearch:any;
}
export default function SearchBar({onSearch}:SearchBarProps) {
  const [query, setQuery] = useState("");



  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onSearch(query);
    }
  };
  return (
    <div className="bg-white border border-slate-500 rounded-3xl flex items-center w-[300px] h-[50px] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
      <label htmlFor="search" className="sr-only">
        Buscar
      </label>
      <AiOutlineSearch className="m-2 text-slate-500" aria-hidden="true" />
      <input
        type="text"
        id="search"
        className="p-2 w-full focus:outline-none rounded-3xl"
        placeholder="Search"
        aria-label="Buscar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
