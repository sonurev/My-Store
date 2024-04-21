import zod from "zod"

export const SignupSchema = zod.object({
  fullName:zod.string(),
  email:zod.string(),
  password:zod.string().min(6),
  mobileNumber:zod.string().min(10)
})

export const LoginSchema = zod.object({
  email:zod.string(),
  password:zod.string().min(6)
})

export const ProductSchema = zod.object({
  name:zod.string(),
  image:zod.string(),
  description:zod.string(),
  brand:zod.string(),
  category:zod.string(),
  current_price:zod.number(),
  original_price:zod.number(),
  countInStock:zod.number()
})


export const AddressSchema = zod.object({
  fullName:zod.string(),
  mobileNumber:zod.string(),
  pinCode:zod.number(),
  address:zod.string(),
  town:zod.string(),
  city:zod.string(),
  state:zod.string(),
  isHome:zod.boolean(),
  isDefaultAddress:zod.boolean()
})

export const WishlistSchema = zod.object({
  userId:zod.string(),
  productId:zod.string()
})