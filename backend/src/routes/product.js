import express from "express";
import { isAdmin, isAuthenticate } from "../middlewares/auth.js";
import { multipleUpload } from "../middlewares/multer.js";
import { addProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.js";
const router = express.Router();

router.post("/product",isAuthenticate,isAdmin,multipleUpload, addProduct);
router.get("/product",getProducts)
router.put("/product/:productId",isAuthenticate,isAdmin,multipleUpload,updateProduct);
router.delete("/product/:productId",deleteProduct);

export default router;