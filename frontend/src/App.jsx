import { useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { Matches } from "./components/Matches";
import { Standings } from "./components/Standings";
import { About } from "./components/About";
import { Route, Routes } from "react-router-dom"; 
function App() {
  let component;

  return (
    <>
      <Navbar />
      <div className="m-0 text-center">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/standings" element={<Standings />}/>
          <Route path="/matches" element={<Matches />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
