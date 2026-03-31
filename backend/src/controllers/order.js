
import config from "../config/index.js";
import Cart from "../models/cart.js";
import Order from "../models/order.js";
import razorpayInstance from "../utils/razorpay.js";
import crypto from "crypto";

export const createOrder = async (req, res) => {
    try {
        const { products, tax, shipping, amount, currency } = req.body;
        const options = {
            amount: Math.round(Number(amount) * 100),  //convert to paise
            currency: currency || "INR",
            receipt: `receipt_${Date.now()}`
        };
        console.log("j ugdy ghs g6hfeg y");
        
const finalAmount = Math.round(Number(amount) * 100);

console.log("FRONTEND AMOUNT (₹):", amount);
console.log("FINAL RAZORPAY AMOUNT (paise):", finalAmount);
        const razorpayOrder = await razorpayInstance.orders.create(options);
        // save order in DB
        console.log("razorpayOrderrazorpayOrder",razorpayOrder);
        
        const neworder = await Order.create({
            userId: req.user._id,
            products, amount, tax, shipping, currency, status: "Pending",
            razorpayOrderId: razorpayOrder.id,
        });
        return res.status(201).json({ success: true, message: "Order created successfully!", razorpayOrder, DBOrder: neworder })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ success: false, message: "Something went wrong!", error: error.message })
    }
};

export const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, paymentFailed } = req.body;
        const userId = req.user._id;

        if (paymentFailed) {
            console.log("++++++++",razorpay_order_id);
            
            const order = await Order.findOneAndUpdate({ razorpayOrderId : razorpay_order_id }, { status: "Failed" }, { new: true })
            return res.status(400).json({ success: false, message: "Payment Failed!", order })
        }

        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto.createHmac("sha256", config.razorpay_api_secret).update(sign.toString()).digest("hex");
        
        if (expectedSignature === razorpay_signature) {
            const order = await Order.findOneAndUpdate({
                razorpayOrderId : razorpay_order_id
            },
                {
                    status: "Paid", razorpayPaymentId: razorpay_payment_id,
                    razorpaySignature: razorpay_signature
                }, { new: true });
            await Cart.findOneAndUpdate({ userId }, { $set: { items: [], totalPrice: 0 } });
            return res.status(200).json({ success: true, message: "Payment successfull!", order })
        } else {
            await Order.findOneAndUpdate({ razorpayOrderId : razorpay_order_id }, { status: "Failed" }, { new: true });
            return res.status(400).json({ success: false, message: "Invalid SIgnature!" })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Something went wrong!", error: error.message })
    }
};