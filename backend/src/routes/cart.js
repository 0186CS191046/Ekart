import express from "express";
import { isAdmin, isAuthenticate } from "../middlewares/auth.js";
import { multipleUpload } from "../middlewares/multer.js";
import { addToCart,getAllCarts,updateCartQuantity,removeFromCart} from "../controllers/cart.js";
const router = express.Router();

router.get("/cart",isAuthenticate, getAllCarts);
router.post("/cart",isAuthenticate,addToCart)
router.put("/cart",isAuthenticate,updateCartQuantity);
router.delete("/cart",isAuthenticate,removeFromCart);

export default router;