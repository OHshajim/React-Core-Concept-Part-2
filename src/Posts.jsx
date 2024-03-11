import { useEffect } from "react"
import { useState } from "react"
import Post from "./Post"
import './Post.css'

export default function Posts() {
    const [posts, setPost] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div className="container">
            <h2>Posts : {posts.length}</h2>
            {
                posts.map((post)=><Post key={post.id} post={post}></Post>)
            }
            {/* <Post></Post> */}
        </div>
    )
}