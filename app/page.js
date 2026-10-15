"use client";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Header />
        <About />
      </main>
    </>
  );
}
