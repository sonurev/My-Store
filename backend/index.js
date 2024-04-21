import express, { urlencoded } from "express"
const app = express();
import cors from "cors"
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import paymentRoutes from "./routes/paymentRoutes.js"
import wishlistRoutes from "./routes/wishlistRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import connectToMongodb from "./db.js";
import cookieParser from "cookie-parser";

app.use(express.json());
app.use(cors());
app.use(urlencoded({extended:true}));
app.use(cookieParser());

app.use("/api/users", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/admin",adminRoutes)
app.use("/api/wishlist",wishlistRoutes)
app.use("/api/cart",cartRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectToMongodb();
  console.log(`server running on port ${PORT}`);
});
