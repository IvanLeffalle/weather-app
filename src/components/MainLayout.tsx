import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import EmptyCards from "./EmptyCards";

export default function MainLayout() {
  return (
    <div className="">
      <header className="">
        <NavBar />
      </header>
      <main className="justify-center p-4 h-screen ">
        <div className="flex gap-8 p-4">
          <EmptyCards widht="w-1/2" height="h-[500px]" />
          <EmptyCards widht="w-1/2" height="h-[500px]" />
        </div>
        <div className="flex gap-4 p-4">
          <EmptyCards widht="w-full" height="h-[300px]" />
        </div>
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
