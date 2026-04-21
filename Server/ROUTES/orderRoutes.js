import express from "express";
import {
  createOrder,
  getOrders
} from "../CONTROLLER/orderController.js";

const router = express.Router();

router.post("/orders", createOrder);
router.get("/now", getOrders);

export default router;
