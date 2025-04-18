import { useState } from "react";
import { createPost } from "../api";

export default function CreatePost({ onPostCreated }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("Not authorized");

    const res = await createPost(token, content);
    setContent("");
    onPostCreated(res); // Callback to add post to list
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Post</button>
    </form>
  );
}