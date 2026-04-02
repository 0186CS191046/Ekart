import Cart from "../models/cart.js"
import Product from "../models/product.js";

export const getAllCarts = async (req, res) => {
    try {
        const userId = req.user.id
        const carts = await Cart.findOne({ userId }).populate("items.productId");
        if (!carts) {
            return res.status(404).json({ success: false, cart: [] })
        }
        return res.status(200).json({ success: true, message: "Cart fetched successfully!", cart: carts })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Something went wrong!" })
    }
};

export const addToCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId } = req.body;

        //  check if product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not exists!" })
        };

        // find the user's cart (if exists)
        let cart = await Cart.findOne({ userId });
        // if cart doesn't eixsts then create it
        if (!cart) {
            cart = await Cart.create({
                userId, items: [{ productId, price: product.price, quantity: 1 }],
                totalPrice: product.price
            })
        } else {
            // find if product is already in the cart
            const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);
            if (itemIndex > -1) {
                // if product exists -just increase quantity
                cart.items[itemIndex].quantity += 1;
            } else {
                cart.items.push({ productId, price: product.price, quantity: 1 })
            }
            cart.totalPrice = cart.items.reduce((accum, item) => accum + item.price * item.quantity, 0)
        };

        // save updated cart
        await cart.save()

        // populate cart before send response
        const populateCart = await Cart.findById(cart._id).populate("items.productId");

        return res.status(200).json({ success: true, message: "Product added to cart!", cart: populateCart })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Something went wrong!" })
    }
}

export const updateCartQuantity = async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId, type } = req.body;

        let cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ success: false, message: "Cart not exists for this user" });
        };

        const item = cart.items.findIndex((item) => item.productId.toString() === productId);

        if (item === -1) {
            return res.status(404).json({ success: false, message: "Item not found!" });
        }
        if (type === "increase") cart.items[item].quantity += 1;
        if (type === "decrease" && cart.items[item].quantity  > 0) {
            cart.items[item].quantity  -= 1;
            if( cart.items[item].quantity  == 0){
                cart.items.splice(item,1)
            }
        }

        cart.totalPrice = cart.items.reduce((accum, item) => accum + item.quantity * item.price, 0)
        await cart.save();

        cart = await cart.populate("items.productId");
        return res.status(200).json({ success: true, message: "Cart updated successfuly!", cart })
    } catch (error) {
        return res.status(500).json({ success: false, message: "Something went wrong!" })
    }
}

export const removeFromCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { productId } = req.body;

        let cart = await Cart.findOne({userId});
        if (!cart) {
            return res.status(404).json({ success: false, message: "Cart not found!" })
        }

        cart.items = cart.items.filter((item) => item.productId.toString() !== productId)
        cart.totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.quantity,0)
        cart = await cart.populate("items.productId")
        await cart.save()
        return res.status(200).json({ success: true, message: "Cart deleted successfully!", cart })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Something went wrong!" })
    }
};