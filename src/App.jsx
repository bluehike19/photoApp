import { useContext } from "react";
import Login from "./pages/login/Login";
import {
  createBrowserRouter,
  RouterProvider,
  outlet,
  Navigate,
  Outlet,
} from "react-router-dom"
import { AuthContext } from "./context/authContext";
import { DarkModeContext } from "./context/darkModeContext";
import Navbar from "./componets/navbar/Navbar";
import LeftBar from "./componets/leftBar/LeftBar";
import RightBar from "./componets/rightbar/RightBar";


function App() {
  const {currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext)

  const Layout = () => {
    retun (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{display: "flex"}}>
          <LeftBar/>
          <div style={{ flex: 6}}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children}) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children;
  }

  return (
    <div>
      
    </div>
  )
}

export default App
