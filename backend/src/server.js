import express from "express";
import config from "./config/index.js";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.js";
import cors from "cors";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({ origin: "http://localhost:5173", methods: ["GET", "POST", "PUT", "DELETE"], credentials: true }))

app.use("/api/v1/", userRoutes);
app.get("/health", (req, res) => {
    res.send("Everything is OK!")
});

app.listen(config.port, () => {
    connectDB();
    console.log("Server is listening on port :", config.port);
})