import express from "express"
import { deleteProduct, updateProduct, createProduct } from "../controllers/admin.controller.js";
import { login, logout } from "../controllers/admin.controller.js";
import { admin } from "../middlewares/protectionRoute.js";

const router = express.Router();


router.post("/login",admin, login);

router.post("/logout", logout);

router.delete('/product/:id', admin, deleteProduct);

router.put('/product/:id', admin, updateProduct);

router.post('/product/', admin, createProduct);

export default router;