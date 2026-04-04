
import config from "../config/index.js";
import Cart from "../models/cart.js";
import Order from "../models/order.js";
import User from "../models/user.js";
import Product from "../models/product.js"
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

        const finalAmount = Math.round(Number(amount) * 100);

        const razorpayOrder = await razorpayInstance.orders.create(options);

        // save order in DB
        const neworder = await Order.create({
            userId: req.user._id,
            products, amount, tax, shipping, currency, status: "Pending",
            razorpayOrderId: razorpayOrder.id,
        });
        return res.status(201).json({ success: true, message: "Order created successfully!", razorpayOrder, DBOrder: neworder })
    } catch (error) {
        console.log("Error creating order", error.message);
        return res.status(500).json({ success: false, message: "Something went wrong!", error: error.message })
    }
};

export const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, paymentFailed } = req.body;
        const userId = req.user._id;

        if (paymentFailed) {
            const order = await Order.findOneAndUpdate({ razorpayOrderId: razorpay_order_id }, { status: "Failed" }, { new: true })
            return res.status(400).json({ success: false, message: "Payment Failed!", order })
        }

        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto.createHmac("sha256", config.razorpay_api_secret).update(sign.toString()).digest("hex");

        if (expectedSignature === razorpay_signature) {
            const order = await Order.findOneAndUpdate({
                razorpayOrderId: razorpay_order_id
            },
                {
                    status: "Paid", razorpayPaymentId: razorpay_payment_id,
                    razorpaySignature: razorpay_signature
                }, { new: true });
            await Cart.findOneAndUpdate({ userId }, { $set: { items: [], totalPrice: 0 } });
            return res.status(200).json({ success: true, message: "Payment successfull!", order })
        } else {
            await Order.findOneAndUpdate({ razorpayOrderId: razorpay_order_id }, { status: "Failed" }, { new: true });
            return res.status(400).json({ success: false, message: "Invalid SIgnature!" })
        }

    } catch (error) {
        console.log("Error verifying Payment :", error.message);
        return res.status(500).json({ success: false, message: "Something went wrong!", error: error.message })
    }
};

export const getMyOrders = async (req, res) => {
    try {
        const userId = req.user._id;
        const orders = await Order.find({ userId }).populate({ path: "products.productId", select: "productName price productImg" })
            .populate("userId", "firstName lastName email")

        return res.status(200).json({ success: true, message: "Orders fetched successfully!", orders })
    } catch (error) {
        console.log("Error fetching user orders...", error);
        return res.status(500).json({ success: false, message: "Something went wrong!", error: error.message })
    }
};

// Admin Only
export const getUserOrders = async (req, res) => {
    try {
        const { userId } = req.params;
        const orders = await Order.find({ userId }).populate({ path: "products.productId", select: "productName price productImg" })
            .populate("userId", "firstName lastName email");

        return res.status(200).json({
            success: true, message: "Orders fetched successfully!",
            count: orders.length,
            orders
        })
    } catch (error) {
        console.log("Error fetching user orders...", error);
        return res.status(500).json({ success: false, message: "Something went wrong!", error: error.message })

    }
};

export const getAllOrdersAdmin = async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 })
            .populate("user", "name email") //populate user info
            .populate("products.productId", "productName price productImg")  //populate product info

        return res.status(200).json({
            success: true, message: "Orders fetched successfully!",
            count: orders.length,
            orders
        });

    } catch (error) {
        console.log("Error fetching user orders...", error);
        return res.status(500).json({ success: false, message: "Something went wrong!", error: error.message })
    }
};

export const getSalesData = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalProducts = await Product.countDocuments();
        const totalOrders = await Order.countDocuments({ status: "Paid" });

        // total sales amount
        const totalSalesAgg = await Order.aggregate([
            { $match: { status: "Paid" } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);

        const totalSales = totalSalesAgg[0]?.total || 0;

        // sales grouped by date (last 30 days)

        const lastTotalThirtyDays = new Date()
        lastTotalThirtyDays.setDate(lastTotalThirtyDays.getDate() - 30);

        const salesByData = await Order.aggregate([
            { $match: { status: "Paid", createdAt: { $gte: lastTotalThirtyDays } } },
            {
                $group: {
                    _id:
                        { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    amount: { $sum: "$amount" }
                }
            },
            { $sort: { _id: -1 } }
        ]);

        const formattedSales = salesByData.map((item) => ({
            date: item._id,
            amount: item.amount
        }))

        return res.status(200).json({
            success: true, message: "Orders fetched successfully!",
            totalUsers,
            totalProducts,
            totalOrders,
            totalSales,
            sales: formattedSales
        });
    } catch (error) {
        console.log("Error fetching user orders...", error);
        return res.status(500).json({ success: false, message: "Something went wrong!", error: error.message })
    }
}