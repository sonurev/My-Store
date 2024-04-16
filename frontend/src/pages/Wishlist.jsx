import { Appbar } from "../components/Appbar";
import { WishListBody } from "../components/WishListBody";

export const Wishlist = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 w-full">
        <Appbar />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <WishListBody />
      </div>
    </div>
  );
};
