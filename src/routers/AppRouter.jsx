import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "../components/login/Login"
import DashboardsRoutes from "./DashboardsRoutes"

const AppRouter = () => {
  return (
    < BrowserRouter>
     
      <Routes>
    
        <Route path="/login" element={ < Login /> } />

        <Route path="/*" element={ <DashboardsRoutes /> }  />

      </Routes>
      </BrowserRouter>
    
  )
}

export default AppRouter