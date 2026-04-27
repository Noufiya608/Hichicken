import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import fs from "fs";

// ✅ FIX dirname
const __dirname = path.resolve();

// ✅ Ensure uploads folder exists
const uploadPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// ✅ STATIC SERVE (VERY IMPORTANT)
app.use("/uploads", express.static(uploadPath));

// Middleware
app.use(cors({
  origin: [
    "https://www.hichicken.in",
    "https://hichicken.in",
    "https://hichicken2.onrender.com",
    "http://localhost:5173"
  ],
  credentials: true
}));

app.use(express.json());

// Routes
import priceRoutes from "./ROUTES/priceRoutes.js";
import orderRoutes from "./ROUTES/orderRoutes.js";
import payRoutes from "./ROUTES/payRoutes.js";
import authRoutes from "./ROUTES/authRoutes.js";
import contactRoutes from "./ROUTES/contactRoutes.js";
import productRoutes from "./ROUTES/productRoutes.js";

app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

app.use("/api/price", priceRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/payment", payRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/products", productRoutes);

// ✅ DEBUG ROUTE
app.get("/check-uploads", (req, res) => {
  const files = fs.readdirSync(uploadPath);
  res.json(files);
});

// DB + Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB error", err);
  });