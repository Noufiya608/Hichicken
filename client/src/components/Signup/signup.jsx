import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/signup", form);
      alert("✅ Signup successful");
      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth">
      <form onSubmit={submit}>
        <h2>Sign up</h2>

        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

        <button>Sign up</button>

        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
}