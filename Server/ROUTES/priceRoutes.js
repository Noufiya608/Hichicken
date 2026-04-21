import express from "express";
import {
  getTodayPrice,
  updatePrice
} from "../CONTROLLER/priceController.js";

const router = express.Router();

router.get("/today", getTodayPrice);
router.post("/update", updatePrice);

export default router;