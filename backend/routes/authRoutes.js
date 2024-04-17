
import express from "express"
import { login,logout,signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/protectionRoute.js";
import { createWishItem,getWishlistItems } from "../controllers/wishlist.controller.js";
import {getAddress,createAddress } from "../controllers/address.controller.js";

const router = express.Router();


router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);

router.get("/address/:id",protectRoute,getAddress);

router.post("/address",protectRoute,createAddress);

router.post("/wishlist",protectRoute,createWishItem);

router.get("/wishlist",protectRoute,getWishlistItems)


export default router;