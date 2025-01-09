import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import TodayCard from "./TodayCard";
import TodayHighlight from "./TodayHighlight";
import ForecastCard from "./ForecastCard";

export default function MainLayout() {
  const [dataWeatherCurrent, setDataWeatherCurrent] = useState(null);
  const [dataWeatherForecast, setDataWeatherForecast] = useState(null);
  const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;

  const handleSearch = async (query = "Buenos Aires") => {
    try {
      // Obtener clima actual
      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`
      );
      const currentData = await currentResponse.json();
      if (currentResponse.ok) {
        setDataWeatherCurrent(currentData);
      } else {
        console.error("Error:", currentData.message);
      }

      // Obtener pronóstico de 5 días
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${apiKey}&units=metric`
      );
      const forecastData = await forecastResponse.json();
      if (forecastResponse.ok) {
        setDataWeatherForecast(forecastData);
      } else {
        console.error("Error:", forecastData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Cargar datos de Buenos Aires al montar el componente
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="">
        <NavBar onSearch={handleSearch} />
      </header>
      <main className="flex-grow p-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4">
          {dataWeatherCurrent ? (
            <>
              <TodayCard
                width="w-full md:w-1/2"
                height="h-auto"
                data={dataWeatherCurrent}
              />
              <TodayHighlight
                width="w-full md:w-1/2"
                height="h-auto"
                data={dataWeatherCurrent}
              />
            </>
          ) : (
            <p className="text-center">Cargando datos del clima...</p>
          )}
        </div>
        <div className="flex gap-4 p-4">
          {dataWeatherForecast ? (
            <ForecastCard
              width="w-full"
              height="h-full"
              data={dataWeatherForecast}
            />
          ) : (
            <p className="text-center">Cargando pronóstico...</p>
          )}
        </div>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
