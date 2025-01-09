import SearchBar from "./SearchBar";
import logo from "../assets/images/logo.png";

interface NavBarProps {
  onSearch: any;
}

export default function NavBar({ onSearch }: NavBarProps) {
  return (
    <nav className="bg-[#3795BD] shadow-lg h-20 flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
      {/* Logo y título */}
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 md:w-12 md:h-12 rounded-lg"
        />
        <h1 className="text-2xl md:text-3xl font-bold text-[#424242]">
          WeatherApp
        </h1>
      </div>

      {/* Barra de búsqueda */}
      <div className="w-full md:w-auto mt-4 md:mt-0">
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}
