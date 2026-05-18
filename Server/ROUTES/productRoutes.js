import express from "express";
import upload from "../Middleware/productMiddleware.js";
import { addProduct, deleteAllProducts, deleteProduct, getProducts } from "../CONTROLLER/productController.js";

const router = express.Router();

// 🔥 VERY IMPORTANT → "image" must match frontend field name
router.post("/", upload.single("image"), addProduct);

router.get("/", getProducts);
router.delete("/delete/:id", deleteProduct);
router.delete("/delete-all", deleteAllProducts);

export default router;