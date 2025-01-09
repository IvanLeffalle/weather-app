import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import TodayCard from "./TodayCard";
import TodayHighlight from "./TodayHighlight";
import ForecastCard from "./ForecastCard";

export default function MainLayout() {

  const [dataWeatherCurrent, setDataWeatherCurrent]=useState(null)
  const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;

  const handleSearch = async (query) => {
    if (!query) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`
      );
      const data = await response.json();
      console.log(data);
      setDataWeatherCurrent(data)

    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="">
      <header className="">
        <NavBar onSearch={handleSearch} />
      </header>
      <main className="justify-center p-4 h-screen ">
        <div className="flex gap-8 p-4">
          <TodayCard width="w-1/2" height="h-auto" data={dataWeatherCurrent}/>
          <TodayHighlight width="w-1/2" height="h-auto" />
        </div>
        <div className="flex gap-4 p-4">
          <ForecastCard width="w-full" height="h-full"  />
        </div>
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
