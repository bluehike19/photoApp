import Post from "../post/Post";
import "./posts.scss"

const Posts = () => {
    const posts = [
        {
            id: 1,
            name: "John Doe",
            userId: 1,
            profilePic: "src/assets/ps-projects/bhike.png"
        },
        {
            id: 2,
            name: "John Doe",
            userId: 2,
            profilePic: "src/assets/ps-projects/Untitled-4.png"
        },
    ];

  return (
    <div className="posts">
        {posts.map(post=>(
            <Post post={post} key={post.id} />
        ))}
    </div>
  )
}

export default Posts