import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import NavBar from "./components/nav-bar.tsx";
import About from "./pages/about.tsx";
import Resume from "./pages/resume.tsx";

function App() {

  return (
    <BrowserRouter>
      <div className="bg-gray-700 min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/resume" element={<Resume />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
