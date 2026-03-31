import express from "express";
import { isAuthenticate } from "../middlewares/auth.js";
import { createOrder, verifyPayment } from "../controllers/order.js";
const router = express.Router();

router.post("/order", isAuthenticate, createOrder);
router.post("/order/verify", isAuthenticate, verifyPayment)


export default router;