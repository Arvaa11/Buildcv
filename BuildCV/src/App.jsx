import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Templates from "./pages/Templates"
import Builder from "./pages/Builder"
import Preview from "./pages/Preview"

function App() {
  return (
    <>
      <Navbar />
      

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Templates */}
          <Route path="/templates" element={<Templates />} />

          {/* Resume Builder */}
          <Route path="/builder" element={<Builder />} />

          {/* Resume Preview */}
          <Route path="/preview" element={<Preview />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      
      <Footer />
    </>
  );
}

export default App
