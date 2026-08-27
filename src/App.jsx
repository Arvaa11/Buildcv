import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Templates from "./pages/Templates"
import Builder from "./pages/Builder"
import Preview from "./pages/Preview"

function App() {
  return (
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
  )
}

export default App