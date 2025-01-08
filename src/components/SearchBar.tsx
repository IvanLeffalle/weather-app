import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;

  const handleSearch = async () => {
    if (!query) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
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
