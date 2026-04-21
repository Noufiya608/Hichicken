import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/admin/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`, // 🔐 send token
          },
        }
      );

      setOrders(res.data);
    } catch (err) {
      console.error(err);

      // ❌ If unauthorized → logout
      if (err.response?.status === 401 || err.response?.status === 403) {
        logout();
      }
    }
  };

  // 🔓 Logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>

        {/* 🔴 Logout Button */}
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="card">
        <h2>Total Orders</h2>
        <p>{orders.length}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o._id}>
              <td>{o._id}</td>
              <td>{o.quantity}</td>
              <td>{o.status || "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;