import { useContext } from "react"
import "./login.scss"
import { AuthContext } from "../../context/authContext"
import { Link } from "react-router-dom"

const Login = () => {
  const {login} = useContext(AuthContext)

  const handleLogin = () => {
    login()
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odio qui eligendi ratione hic voluptate voluptatum, at magnam. Eaque porro possimus cumque perferendis quaerat repellendus! Velit doloremque aperiam voluptatibus consequuntur.</p>
          <span>Don't have an account?</span>
          <Link to='/register'>
           <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login