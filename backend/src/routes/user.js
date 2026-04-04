import express from "express";
import { changePassword, forgotPassword, getAccessToken, getAllUsers, getUserById, login, logout, register, resendEmailVerification, updateUser, verifyEmail, verifyOTP } from "../controllers/user.js";
import { isAdmin, isAuthenticate,validateRefreshToken } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";
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
router.put("/user/:id",isAuthenticate,singleUpload, updateUser);
router.get("/access-token",validateRefreshToken,getAccessToken)

export default router;