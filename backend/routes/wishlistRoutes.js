import express from "express"

import {
  createWishItem, getWishlistItems
} from '../controllers/wishlist.controller.js';

import { protectRoute } from "../middlewares/protectionRoute.js";

const router = express.Router();


router.post('/', protectRoute, createWishItem);

router.get('/:userId', protectRoute, getWishlistItems);


export default router;

