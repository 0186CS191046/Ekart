import express from "express";
import { isAuthenticate ,isAdmin} from "../middlewares/auth.js";
import { createOrder, getAllOrdersAdmin, getMyOrders, getSalesData, getUserOrders, verifyPayment } from "../controllers/order.js";
const router = express.Router();

// For users
router.post("/order", isAuthenticate, createOrder);
router.post("/order/verify", isAuthenticate, verifyPayment);
router.get("/orders",isAuthenticate,getMyOrders);

// For admin
router.get("/orders/user-order/:userId",isAuthenticate,isAdmin,getUserOrders);
router.get("/orders/all",isAuthenticate, isAdmin, getAllOrdersAdmin);
router.get("/orders/sales-data",isAuthenticate,isAdmin,getSalesData);

export default router;