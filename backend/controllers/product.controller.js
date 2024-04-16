import Product from "../models/product.models.js";
import { ProductSchema } from "../types.js";
import { deleteFile } from "../utils/file.js";


const getProducts = async (req, res, next) => {
  try {
    const total = await Product.countDocuments();
    const search = req.query.search || '';

    const products = await Product.find({
      name: { $regex: search, $options: 'i' }
    })

    if (!products || products.length === 0) {
      res.statusCode = 404;
      throw new Error('Products not found!');
    }

    res.status(200).json({
      products,
      total
    });
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const { id: productId } = req.params;
    const product = await Product.findById(productId);

    if (!product) {
      res.statusCode = 404;
      throw new Error('Product not found!');
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};




export {
  getProducts,
  getProduct
};