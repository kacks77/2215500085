const BASE_URL = "http://localhost:5000/api"; // Adjust to your backend

export const registerUser = async (userData) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const fetchPosts = async (token) => {
  const res = await fetch(`${BASE_URL}/posts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const createPost = async (token, content) => {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content }),
  });
  return res.json();
};