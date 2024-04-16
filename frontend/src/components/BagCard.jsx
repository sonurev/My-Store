import { useState } from "react";
import { useRecoilState } from "recoil";
import { baglistState } from "../store/atoms";


export const BagCard = ({
  Id,
  name,
  company,
  imagelink,
  description,
  currentPrice,
  originalPrice,
  countInStock,
  category
}) => {

  const[baglist,setBaglist]=useRecoilState(baglistState);


  function handleMoveToBag() {
    // Check if the item already exists in the baglist
    const isItemExists = baglist.some(item => item.Id === Id); // Assuming 'name' is a unique identifier for each item
  
    // If the item does not exist in the baglist, add it
    if (!isItemExists) {
      setBaglist(oldBaglist => [
        ...oldBaglist,
        { 
          Id:Id,
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
    } else {
      console.log(baglist);
      console.log('Item already exists in the baglist');
    }
  }
  
  
  return (
    <div>
      <div
        className="w-52 border border-black hover:cursor-pointer">
        <div>
          <img src={imagelink} alt="" className="-z-10"/>
        </div>
        <div>
          <div className="px-3 pt-2">
          <div className="font-semibold">{company}</div>
          <div className="text-sm text-gray-900">{description}</div>
          </div>
          
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
        <div className="">
          <button onClick={handleMoveToBag} className="border w-full text-pink-500 font-semibold py-1">MOVE TO BAG</button>
        </div>
      </div>
      
    </div>
  );
};
