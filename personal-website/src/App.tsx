// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import NavBar from "./components/nav-bar.tsx";
import About from "./pages/about.tsx";
import Resume from "./pages/resume.tsx";

function App() {

  return (
  <div className="bg-gray-700">
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/resume" element={<Resume />}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
