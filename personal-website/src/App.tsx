import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import NavBar from "./components/nav-bar.tsx";
import About from "./pages/about.tsx";
import Resume from "./pages/resume.tsx";
import Media from "./pages/Media"

function App() {

  return (
    <BrowserRouter>
      <div className="bg-neutral-800 min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/Media" element={<Media />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
