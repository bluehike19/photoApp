import { Link } from "react-router-dom"
import "./register.scss"


const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>blueHike social.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos quod atque nihil earum exercitationem. Molestiae, sequi magni perferendis dolorem ipsam corporis? Eveniet pariatur, voluptatibus quod iusto voluptatum architecto minima.</p>
          <span>Do you have an account?</span>
          <Link to='/login'>
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register