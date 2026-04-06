import express from "express";
import config from "./config/index.js";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import orderRoutes from "./routes/order.js"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const allowedOrigins = [
  "http://localhost:5173",
  "https://ekart-1-1hme.onrender.com"
];

app.use(cors({
  origin: function (origin, callback) {
    console.log("Incoming origin:", origin);

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, origin); // important change
    } else {
      callback(new Error("CORS blocked"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));
// app.use(cors({ origin: ["http://localhost:5173","https://ekart-1-1hme.onrender.com"], methods: ["GET", "POST", "PUT", "DELETE"], credentials: true }))
app.use(cookieParser());

app.use("/api/v1/", userRoutes);
app.use("/api/v1/",productRoutes);
app.use("/api/v1/",cartRoutes);
app.use("/api/v1",orderRoutes);

app.get("/health", (req, res) => {
    res.send("Everything is OK!")
});

app.listen(config.port, () => {
    connectDB();
    console.log("Server is listening on port :", config.port);
})