import { ProductSchema } from "../types.js";


export const createWishItem=(req,res,next)=>{

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

    
    
  } catch (error) {
    next(error);
  }

}

export const getWishlistItems=(req,res,next)=>{

}