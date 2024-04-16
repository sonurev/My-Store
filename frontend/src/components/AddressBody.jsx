import { DefaultAddressCard } from "./DefaultAddressCard"
import { OtherAddressCard } from "./OtherAddressCard"

export const AddressBody=()=>{
  return <div className="w-9/12  mx-auto h-screen flex gap-6">
    <div className="w-7/12 mt-6 flex flex-col gap-2 border-black">
      <div className="flex justify-between">
        <p className="font-semibold text-xl">Select Delivery Address</p>
        <button className="border border-gray-500 font-semibold px-3 rounded-md py-1" style={{fontSize:"12px"}}>ADD NEW ADDRESS</button>
      </div>
      <div className="flex flex-col gap-2">
        <div style={{fontSize:"12px"}} className="text-gray-500 font-bold">DEFAULT ADDRESS</div>
        <div><DefaultAddressCard></DefaultAddressCard></div>
        <div style={{fontSize:"12px"}} className="text-gray-500 font-bold">OTHER ADDRESS</div>
        <div><OtherAddressCard></OtherAddressCard></div>
      </div>
      <div className="border  py-6 px-4">
      <button className="font-semibold text-pink-500">+ Add New Address</button>
      </div>
    </div>
    <div className=" border-l flex justify-center  w-96">
      <div className="flex flex-col gap-4 pt-4" style={{width:"340px"}}>
      <div className="font-bold text-gray-500" style={{fontSize:"12px"}}>DELIVERY ESTIMATES</div>
      <div className="flex gap-4 items-center">
        <img src="https://shorturl.at/iNQR1" alt="" />
        <p>Delivery between 20 Apr - 22 Apr</p>
      </div>
      <div>
      <div className=" py-2 flex flex-col gap-2">
              <div className="font-semibold" style={{ fontSize: "12px" }}>
                <span>PRICE DETAILS</span> (1 Item)
              </div>
              <div className="text-sm flex flex-col gap-2 text-gray-500 font-semibold">
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
                <div className="flex justify-between">
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
            <div className=" flex flex-col gap-4">
              <div className="flex justify-between">
                <p>Total Amount</p>
                <p>₹923</p>
              </div>
              <button className="bg-pink-500 w-full text-white px-4 py-3 font-semibold text-sm">PLACE ORDER</button>
            </div>
      </div>
      </div>
    </div>
  </div>
}