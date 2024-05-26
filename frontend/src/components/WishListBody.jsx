import { BagCard } from "./BagCard";
import { useWishlist } from "../hooks";

export const WishListBody = ()=>{

  const {wishlist,loading }= useWishlist();
  
  const  wishlistFunction=(wishlist)=>{
    console.log("inside function")
    wishlist.forEach((element) => {
      console.log(element.ItemId);
    });
  }
  wishlistFunction(wishlist);

  return <div className="">
         { loading===false ? (
        <div className="flex flex-wrap gap-8">
          { wishlist.map((item) => (
              <BagCard
              key={item.ItemId}
              Id={item.ItemId}
              name={item.name}
              company={item.brand}
              imagelink={item.image}
              description={item.description}
              currentPrice={item.current_price}
              originalPrice={item.original_price}
              category={item.category}
              countInStock={item.countInStock}
              />
            ))}
        </div>
      ) : (
        <div>
          <div className="mx-auto flex items-center w-screen h-screen justify-center">
            <div className="flex flex-wrap h-screen">
              <div className="h-72 bg-gray-500 rounded-md"></div>
              <div className="h-72 bg-gray-500 rounded-md"></div>
              <div className="h-72 bg-gray-500 rounded-md"></div>
              <div className="h-72 bg-gray-500 rounded-md"></div>
              <div className="h-72 bg-gray-500 rounded-md"></div>
            </div>
          </div>
        </div>
      )}
  </div>
}