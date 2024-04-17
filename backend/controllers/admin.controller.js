import bcrypt from "bcryptjs";
import User from "../models/user.models.js";
import Product from "../models/product.models.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import { LoginSchema } from "../types.js"
import { ProductSchema } from "../types.js";
import { deleteFile } from "../utils/file.js";

export const login = async (req, res) => {

	const loginPayload = req.body;
	const parsedPayload = LoginSchema.safeParse(loginPayload);

	if (!parsedPayload.success) {
		res.status(411).json({
			msg: "You sent the wrong inputs",
		});
		return;
	}

	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			email: user.email,
		});
		
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const createProduct = async (req, res, next) => {
  
  const productPayload = req.body;
  const parsedPayload = ProductSchema.safeParse(productPayload);
  // console.log("Product Payload:", productPayload);
  // console.log("Parsed Payload Error:", parsedPayload.error);
  if(!parsedPayload.success){
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  try {
    const { name, image, description, brand, category, current_price,original_price, countInStock } =
      req.body;
    console.log(req.file);
    const product = new Product({
      user: req.user._id,
      name,
      image,
      description,
      brand,
      category,
      current_price,
      original_price,
      countInStock
    });
    const createdProduct = await product.save();

    res.status(200).json({ message: 'Product created', createdProduct });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  const productPayload = req.body;
  const parsedPayload = ProductSchema.safeParse(productPayload);
  if(!parsedPayload.success){
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  try {
    const { name, image, description, brand, category, current_price,original_price, countInStock } =
      req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {
      res.statusCode = 404;
      throw new Error('Product not found!');
    }

    // Save the current image path before updating
    const previousImage = product.image;

    product.name = name || product.name;
    product.image = image || product.image;
    product.description = description || product.description;
    product.brand = brand || product.brand;
    product.category = category || product.category;
    product.current_price = current_price || product.current_price;
    product.original_price = original_price || product.original_price;
    product.countInStock = countInStock || product.countInStock;

    const updatedProduct = await product.save();

    // Delete the previous image if it exists and if it's different from the new image
    if (previousImage && previousImage !== updatedProduct.image) {
      deleteFile(previousImage);
    }

    res.status(200).json({ message: 'Product updated', updatedProduct });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id: productId } = req.params;
    const product = await Product.findById(productId);

    if (!product) {
      res.statusCode = 404;
      throw new Error('Product not found!');
    }
    await Product.deleteOne({ _id: product._id });
    // deleteFile(product.image); // Remove upload file

    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    next(error);
  }
};