import express from "express"
import {
  getProducts,
  getProduct
} from '../controllers/product.controller.js';
import {protectRoute} from "../middlewares/protectionRoute.js";

const router = express.Router();


router.get('/', getProducts);

router.get('/:id', protectRoute, getProduct);


export default router;