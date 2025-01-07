import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import TodayCard from "./TodayCard";
import TodayHighlight from "./TodayHighlight";
import ForecastCard from "./ForecastCard";

export default function MainLayout() {
  return (
    <div className="">
      <header className="">
        <NavBar />
      </header>
      <main className="justify-center p-4 h-screen ">
        <div className="flex gap-8 p-4">
          <TodayCard width="w-1/2" height="h-[500px]" />
          <TodayHighlight width="w-1/2" height="h-[500px]" />
        </div>
        <div className="flex gap-4 p-4">
          <ForecastCard width="w-full" height="h-[300px]" />
        </div>
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
