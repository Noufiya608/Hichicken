import express from "express";
import { sendContact } from "../CONTROLLER/contactController.js";

const router = express.Router();

router.post("/sendme", sendContact);

export default router;