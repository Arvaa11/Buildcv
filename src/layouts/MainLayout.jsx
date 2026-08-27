import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function MainLayout() {
  return (
    <div className="min-h-screen bg-buildcv-background text-buildcv-text">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout