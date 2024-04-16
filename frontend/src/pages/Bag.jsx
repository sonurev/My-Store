import { useNavigate } from "react-router-dom";
import { Bagbar } from "../components/Bagbar";
import { useRecoilState } from "recoil";
import { baglistState } from "../store/atoms";
import { BagCard } from "../components/BagCard";
import downarrow from "../assets/downarrow.svg";
import offer from "../assets/offer.svg";
import coupon from "../assets/coupon.svg";
import { OrderCard } from "../components/OrderCard";

export const Bag = () => {
  const navigate = useNavigate();
  const [baglist, setBaglist] = useRecoilState(baglistState);

  return (
    <div>
      <div>
        <Bagbar />
      </div>
      {baglist.length === 0 ? (
        <div>
          <div className="mx-auto flex items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
              <div>
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
                  className="h-40"
                  alt=""
                />
              </div>
              <div className="flex gap-2 flex-col items-center justify-center">
                <p className="font-bold text-lg">Hey,it feels so light!</p>
                <p>There is nothing in your bag.Let's add some items.</p>
                <div className="mt-3">
                  <button
                    onClick={() => {
                      navigate("/wishlist");
                    }}
                    className="border  text-pink-600 font-semibold text-sm px-3 py-2 border-pink-600"
                  >
                    ADD ITEMS FROM WISHLIST
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-9/12  mx-auto h-screen flex gap-6">
          <div className="w-7/12 mt-6 flex flex-col gap-2 border-black">
            <div className="flex justify-between border items-center py-2 px-2">
              <div className="flex flex-col gap-1">
                <p>Deliver to:Sonu Meena,247667</p>
                <p>A-425,Rajiv Bhawan,IIT Roorkee, Roorkee City,Roorkee</p>
              </div>
              <div>
                <button className="border text-sm text-pink-600 border-pink-500 px-3 py-1">
                  CHANGE ADDRESS
                </button>
              </div>
            </div>
            <div className="px-2 py-2 border">
              <div>
                <div className="flex gap-2">
                  <img src={offer} alt="" />
                  <p className="font-semibold text-sm">Available Offers</p>
                </div>
                <div className="ml-2">
                  {" "}
                  · 10% Instant Discount on BOBCARD (Credit Cards) on a min
                  spend of ₹3,000. TCA
                </div>
              </div>
              <div className="ml-5">
                <button className="flex gap-1 items-center">
                  <span className="font-semibold text-md">Show More </span>
                  <img src={downarrow} alt="" className="h-4 w-3 mt-1" />
                </button>
              </div>
            </div>
            <div class="flex justify-between items-center px-6 h-24 ">
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5 text-pink-500"
                />
                <span class="text-gray-700 ml-2">1/1 ITEMS SELECTED</span>
              </label>

              <div class="flex">
                <button class="text-gray-700  focus:outline-none">
                  REMOVE
                </button>

                <div class="mx-2 border-l border-gray-400"></div>

                <button class="text-gray-700  focus:outline-none">
                  MOVE TO WISHLIST
                </button>
              </div>
            </div>
            <div>
              <OrderCard></OrderCard>
            </div>
          </div>
          <div className="border  w-96">
            <div className="flex px-2 py-2 flex-col gap-2">
              <p className="font-semibold pl-2">COUPONS</p>
              <div className="flex justify-between px-2">
                <div className="flex gap-2 items-center">
                  <img src={coupon} alt="" className="h-5" />
                  <p className="font-semibold">Apply Coupons</p>
                </div>
                <div className="">
                  <button className="text-pink-500 border border-pink-500 px-4 pb-1">
                    Apply
                  </button>
                </div>
              </div>
              <div className="h-px ml-1 mt-2 bg-gray-400 w-84"></div>
            </div>

            <div className="px-4 flex flex-col gap-4 my-2">
              <div
                className=" text-gray-500  font-semibold"
                style={{ fontSize: "12px" }}
              >
                SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="donate"
                  name="donate"
                  className="mr-2 h-4 w-4 rounded border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                />
                <label htmlFor="donate" className="text-gray-700 font-semibold">
                  Donate and make a difference
                </label>
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-1 rounded-2xl border border-gray-300 text-black font-semibold">
                  ₹10
                </button>
                <button className="px-4 py-1 rounded-2xl border border-gray-300 text-black font-semibold">
                  ₹20
                </button>
                <button className="px-4 py-1 rounded-2xl border border-gray-300 text-black font-semibold">
                  ₹50
                </button>
              </div>
              <div className="text-md text-pink-500 font-semibold">
                Know More
              </div>
              <div className="h-px ml-1 mt-2 bg-gray-400 w-84"></div>
            </div>
            <div className="px-4 py-2 flex flex-col gap-2">
              <div className="font-semibold" style={{ fontSize: "12px" }}>
                <span>PRICE DETAILS</span> (1 Item)
              </div>
              <div className="text-md flex flex-col gap-2 text-gray-500 font-thin">
                <div className="flex justify-between">
                  <p>Total MRP</p>
                  <p>₹1,499</p>
                </div>
                <div className="flex justify-between">
                <div className="flex gap-2">
                    <span>Discount on MRP </span>
                    <div className="text-md text-pink-500 font-semibold">
                      Know More
                    </div>
                  </div>
                  <p className="text-green-500">- ₹675</p>
                </div>
                <div className="flex justify-between">
                  <p>Coupon Discount</p>
                  <p>Apply Coupon</p>
                </div>
                <div>
                  <div className="flex gap-2">
                    <span>Platform Fee </span>
                    <div className="text-md text-pink-500 font-semibold">
                      Know More
                    </div>
                  </div>
                  <p>₹20</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <span>Shipping Fee </span>
                    <div className="text-md text-pink-500 font-semibold">
                      Know More
                    </div>
                  </div>
                  <p>₹79</p>
                </div>
              </div>
              <div className="h-px ml-1 mt-2 bg-gray-400 w-84"></div>
            </div>
            <div className="px-4 flex flex-col gap-4">
              <div className="flex justify-between">
                <p>Total Amount</p>
                <p>₹923</p>
              </div>
              <button className="bg-pink-500 w-full text-white px-4 py-2 font-semibold text-sm">CONTINUE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
