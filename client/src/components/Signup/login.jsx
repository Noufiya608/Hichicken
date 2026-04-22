import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
const [showPassword, setShowPassword] = useState("")
  const [message, setMessage] = useState(""); // ✅ message state
  const [isError, setIsError] = useState(false); // ✅ error/success control

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      localStorage.setItem("token", res.data.token);

      setIsError(false);
      setMessage("✅ Login successful");

      // ⏳ redirect after 1.5 seconds
      setTimeout(() => {
        window.location.href = "/home";
      }, 1500);

    } catch (err) {
      setIsError(true);
      setMessage(err.response?.data?.message || "❌ Login failed");
    }
  };

  return (
    <div className="auth">
      <form onSubmit={submit}>
        <h2>Login</h2>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        {/* 🔹 Password with eye icon */}
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button>Login</button>

        {/* ✅ Message display */}
        {message && (
          <p className={isError ? "error" : "success"}>
            {message}
          </p>
        )}

        <p>
          <a href="/forgot">Forgot Password?</a>
        </p>

        <p>
          <a href="/signup">Create New Account</a>
        </p>
      </form>
    </div>
  );
}