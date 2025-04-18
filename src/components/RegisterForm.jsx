import { useState } from 'react';
import { registerUser } from '../api';

export default function RegisterForm() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser(form);
    if (res.token) {
      localStorage.setItem("token", res.token);
      alert("Registered successfully!");
    } else {
      alert(res.msg || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}