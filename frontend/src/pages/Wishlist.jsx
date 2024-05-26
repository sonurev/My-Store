import { Appbar } from "../components/Appbar";
import { WishListBody } from "../components/WishListBody";
import { Footbar } from "../components/Footbar";

export const Wishlist = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 w-full">
        <Appbar />
      </div>
      <div className="flex mt-24  justify-center items-center">
        <WishListBody />
      </div>
      <div className="">
        <Footbar></Footbar>
      </div>
    </div>
  );
};
