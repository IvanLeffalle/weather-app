import SearchBar from "./SearchBar";
import logo from "../assets/images/logo.png";

interface NavBarProps{
  onSearch: any;
}
export default function NavBar({onSearch}: NavBarProps) {
  return (
    <>
      <div className="bg-slate-500 h-[100px] flex justify-between items-center p-8">
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <h1 className="text-3xl">WeatherApp</h1>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    </>
  );
}
