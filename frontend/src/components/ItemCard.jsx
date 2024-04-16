import { useState } from "react";
import heart from "../assets/heart.svg";
import { useRecoilState } from "recoil";
import { wishlistState } from "../store/atoms";

export const ItemCard = ({
  ItemId,
  name,
  company,
  imagelink,
  description,
  currentPrice,
  originalPrice,
  countInStock,
  category
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [wishlist,setWishlist] = useRecoilState(wishlistState);

  function addwishlistItem() {
    // Check if the item already exists in the wishlist
    const isItemExists = wishlist.some(item => item.ItemId === ItemId); // Assuming 'ItemId' is a unique identifier for each item
  
    // If the item does not exist in the wishlist, add it
    if (!isItemExists) {
      setWishlist(oldWishlist => [
        ...oldWishlist,
        { 
          ItemId: ItemId,
          name: name,
          image: imagelink,
          description: description,
          brand: company,
          category: category,
          current_price: currentPrice,
          original_price: originalPrice,
          countInStock: countInStock,
        }
      ]);
    }
  
    console.log(wishlist);
  }
  
  

  return (
    <div className="relative">
      <div
        className="w-52 border border-black hover:cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <img src={imagelink} alt="" className="-z-10"/>
        </div>
        <div>
        { isHovered ? (
            <div className="bg-purple-500 absolute  w-full h-auto py-2 px-3">
              <button onClick={addwishlistItem} className="flex items-center gap-3 border border-black w-full justify-center">
                <img src={heart} alt="" className="h-6" />
                <p className="text-lg">Wishlist</p>
              </button>
              <div>Category: <span>{category}</span></div>
            </div>
          ): 
          <div className="px-3 pt-2">
          <div className="font-semibold">{company}</div>
          <div className="text-sm text-gray-900">{description}</div>
          </div>
          }
          <div className="px-3 pt-2 mb-1">
            
            <div className="flex items-center gap-1 mt-1">
              <div className="text-sm font-semibold">Rs.{currentPrice}</div>
              <div className="text-gray-500 line-through" style={{ fontSize: "12px" }}>
                Rs.{originalPrice}
              </div>
              <div className="text-orange-500" style={{ fontSize: "12px" }}>
                ({Math.ceil((currentPrice / originalPrice) * 100)}% OFF)
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
