import express from "express";
import { changePassword, forgotPassword, getAllUsers, getUserById, login, logout, register, resendEmailVerification, verifyEmail, verifyOTP } from "../controllers/user.js";
import { isAdmin, isAuthenticate } from "../middlewares/auth.js";
const router = express.Router();

router.post("/register",register);
router.post("/verify-email",verifyEmail);
router.post("/resend-email",resendEmailVerification);
router.post("/login",login);
router.post("/logout",isAuthenticate ,logout);
router.post("/forgot-password",forgotPassword);
router.post("/verify-otp/:email",verifyOTP);
router.post("/change-password/:email",changePassword);
router.get("/users",isAuthenticate,isAdmin, getAllUsers);
router.get("/user/:id",getUserById);

export default router;