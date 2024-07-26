import { Link } from "react-router-dom"
import "./post.scss"

const Post = ({post}) => {
  return (
    <div className="post">
        <div className="container">
            <div className="user">
                <div className="userInfo">
                    <img src={post.profilePic} alt="" />
                    <div className="details">
                        <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit"}}>
                        <span className="name">{post.name}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post