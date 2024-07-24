import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom"
import Navbar from "./componets/navbar/Navbar";
import LeftBar from "./componets/leftBar/LeftBar";
import RightBar from "./componets/rightbar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Footer from "./componets/footer/Footer";


function App() {

  const {darkMode} = useContext(DarkModeContext)

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{display: "flex"}}>
          <LeftBar/>
          <div style={{ flex: 6}}>
            <Outlet />
          </div>
          <RightBar />
        </div>
        <Footer />
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
