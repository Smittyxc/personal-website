// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import NavBar from "./components/nav-bar.tsx";

function App() {

  return (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<Home />}/>
      <Route path="/resume" element={<Home />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
