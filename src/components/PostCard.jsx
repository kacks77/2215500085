export default function PostCard({ post }) {
    return (
      <div className="post">
        <h4>{post.user?.username}</h4>
        <p>{post.content}</p>
        <small>{new Date(post.createdAt).toLocaleString()}</small>
      </div>
    );
  }