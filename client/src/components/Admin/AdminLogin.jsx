import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      console.log("LOGIN RESPONSE:", res.data);
       const isAdmin = res.data.isAdmin;

    

      // ❌ If NOT admin → block access
      if (!isAdmin) {
      alert("❌ You are not an admin");
      return;
    }

      // ✅ If admin → allow
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify({isAdmin}));

      alert("✅ Admin login successful");

      navigate("/admin");

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth">
      <form onSubmit={submit}>
        <h2>Admin Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">Login as Admin</button>
      </form>
    </div>
  );
}