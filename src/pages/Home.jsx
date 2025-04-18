import { useEffect, useState } from "react";
import { fetchPosts } from "../api";
import PostCard from "../components/PostCard";
import CreatePost from "../components/CreatePost";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      const data = await fetchPosts(token);
      setPosts(data);
    };
    loadPosts();
  }, []);

  const addPost = (newPost) => setPosts([newPost, ...posts]);

  return (
    <div>
      <h2>Home Feed</h2>
      <CreatePost onPostCreated={addPost} />
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}