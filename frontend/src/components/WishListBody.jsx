import { useRecoilState } from "recoil";
import { wishlistState } from "../store/atoms";
import { BagCard } from "./BagCard";

export const WishListBody = ()=>{

  const [wishlist, setWishlist] = useRecoilState(wishlistState);
  
  const  wishlistFunction=(wishlist)=>{
    console.log("inside function")
    wishlist.forEach((element) => {
      console.log(element.ItemId);
    });
  }
  wishlistFunction(wishlist);

  return <div className="">
         { wishlist.length !== 0 ? (
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
            <div className="font-bold text-3xl">wishlist is empty</div>
          </div>
        </div>
      )}
  </div>
}