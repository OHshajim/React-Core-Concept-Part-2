export default function Post({ post }) {
    console.log(post);
    const { title, body, id } = post
    return (
        <div className="container">
            <h3>Id : {id}</h3>
            <h4>Title : {title}</h4>
            <p>Body : {body}</p>
        </div>
    )
}