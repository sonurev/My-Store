import {atom} from "recoil"

export const wishlistState = atom({
  key:"WishlistState",
  default:[]
});

export const productsState = atom({
  key:"ProductsState",
  default:[]
})

export const baglistState = atom({
  key:"BaglistState",
  default:[]
})

export const userDetailsState = atom({
  key:"UserDetailsState",
  default:[]
})