import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/home.tsx";
import About from "./pages/about.tsx";
import Resume from "./pages/resume.tsx";
import Media from "./pages/Media.tsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/Media" element={<Media />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
