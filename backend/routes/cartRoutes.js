import express from "express"

import { protectRoute } from "../middlewares/protectionRoute.js";

const router = express.Router();

import  { addItemToCart, getCart, decreaseQuantity,
  removeItem } from "../controllers/cart.controller.js"

router.post("/:userId", protectRoute, addItemToCart);
router.get("/:userId", protectRoute, getCart);
router.patch("/:userId", protectRoute, decreaseQuantity);
router.delete("/:userId", protectRoute, removeItem);

export default router;
