import Wishlist from "../models/wishlist.models.js";
import { WishlistSchema } from "../types.js";
import User from "../models/user.models.js";

export const createWishItem = async (req, res, next) => {

  const payload = req.body;
  const parsedPayload = WishlistSchema.safeParse(payload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent the wrong inputs"
    })
  }

  try {
    // Extract userId and productId from the request body
    const { userId, productId } = payload;

    // Find the user by userId
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the wishlist exists for the user
    let wishlist = await Wishlist.findOne({ user: userId });

    // If wishlist doesn't exist, create a new one
    if (!wishlist) {
      wishlist = new Wishlist({ user: userId, items: [] });
    }

    // Add the productId to the wishlist
    wishlist.items.push({ item: productId });
    await wishlist.save();

    res.status(200).json({ message: "Product added to wishlist successfully" });
  } catch (error) {
    console.log("Error in addToWishlist: ", error);
    res.status(500).json({ error: "Internal server error" });
  }

}

export const getWishlistItems = async (req, res, next) => {

  const  userId  = req.params.userId; // Assuming you are passing the userId as a parameter

  try {
    // Find the wishlist by user ID
    const wishlist = await Wishlist.findOne({ user: userId }).populate({
      path: 'items.item',
      model: 'Product'
    });

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    res.status(200).json(wishlist.items);
  } catch (error) {
    console.log("Error in getWishlistItems: ", error);
    res.status(500).json({ error: "Internal server error" });
  }

}