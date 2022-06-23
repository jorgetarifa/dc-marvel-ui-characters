import { Routes, Route } from "react-router-dom"
import DcScreen from "../components/dc/DcScreen.jsx"
import Hero from "../components/hero/Hero.jsx"
import MarvelScreen from "../components/marvel/MarvelScreen.jsx"
import Search from "../components/search/Search.jsx"
import  { Navbar }  from "../components/ui/Navbar.jsx"

const DashboardsRoutes = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="container">
      <Routes>
        
        <Route path="marvel" element={< MarvelScreen />} />
        <Route path="dc" element={< DcScreen />} />
        <Route path="search" element={< Search />} />
        <Route path="hero/:id" element={< Hero />} />
        <Route path="/" element={< MarvelScreen />} />
        
      </Routes>
      </div>
    </>
  )
}

export default DashboardsRoutes