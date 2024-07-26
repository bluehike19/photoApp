import { useContext } from "react"
import "./navbar.scss"
import { DarkModeContext } from "../../context/darkModeContext"
// import { AuthContext } from "../../context/authContext"
import { Link } from "react-router-dom"
import { IoHomeOutline, IoPersonOutline, IoSearchOutline, IoSunnyOutline } from "react-icons/io5"
import {  MdOutlineDarkMode, MdOutlineEmail, MdOutlineGridView } from "react-icons/md"
import { BiNotification } from "react-icons/bi"

const Navbar = () => {
  const { toggle, darkMode} = useContext(DarkModeContext)
  // const { currentUser} = useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none"}}>
        <span>blueHike</span>
        </Link>
        <IoHomeOutline />
        <div className="darkmode">
        {darkMode ? (<IoSunnyOutline onClick={toggle} />) : (<MdOutlineDarkMode onClick={toggle} />)}
        </div>
        <MdOutlineGridView />
        <div className="search">
          <IoSearchOutline />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <IoPersonOutline/>
        <MdOutlineEmail/>
        <BiNotification/>
        {/* <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar