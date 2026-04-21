import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  let user = null;
  const token = localStorage.getItem("token");

  try {
    const storedUser = localStorage.getItem("user");

    if (storedUser && storedUser !== "undefined") {
      user = JSON.parse(storedUser);
    }
  } catch (err) {
    console.error("Invalid user data in localStorage");
  }

  // 🔐 No token → not logged in
  if (!token) {
    return <Navigate to="/" />;
  }

  // 🔐 No user → invalid session
  if (!user) {
    return <Navigate to="/" />;
  }

  // 🔐 Not admin
  if (!user.isAdmin) {
    return <Navigate to="/home" />;
  }

  // ✅ Admin allowed
  return children;
}