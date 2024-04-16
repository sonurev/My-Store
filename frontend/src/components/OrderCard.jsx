import { useState } from "react";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import returnarrow from "../assets/returnarrow.svg";
import greenright from "../assets/greenright.svg";
import cross from "../assets/cross.svg";
import save from "../assets/save.svg";
import rightarrow from "../assets/rightarrow.svg";

export const OrderCard = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="relative">
      <div className="flex gap-2 border">
        <div>
          <img src="http://surl.li/sovrj" alt="" className="h-44" />
        </div>
        <div className="px-2 py-2">
          <div>
            <p className="font-semibold text-lg">Puma</p>
            <p>Men White & Grey Graphic Printed Slim Fit T-shirt</p>
          </div>
          <div className="flex gap-2 mt-2 bg-gray-300" style={{width:"70px"}}>
            <div className="">
              <span className="Text-2 flex">
                <label htmlFor="dropdown">Qty:</label>
                <select
                  id="dropdown"
                  name="Qty" className="bg-gray-300"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <div className="text-sm font-semibold">Rs.899</div>
            <div
              className="text-gray-500 line-through"
              style={{ fontSize: "12px" }}
            >
              Rs.1799
            </div>
            <div className="text-orange-500" style={{ fontSize: "12px" }}>
              (50% OFF)
            </div>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <img src={returnarrow} alt="" className="h-5 mt-1" />
              <p className="text-md">
                <span className="font-semibold">14 days</span> return available
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <img src={greenright} alt="" className="h-3" />
            <p>Delivery by 20 Apr 2024</p>
          </div>
        </div>
      </div>
      <div className=" top-2 right-2 absolute h-6 w-6 flex items-center hover:bg-gray-200 rounded-full justify-center bg-white">
        <button className="focus:outline-none">
          <img src={cross} alt="" className="h-4 w-4  " />
        </button>
      </div>
      <div className="flex px-2 h-12 mt-5 border items-center  justify-between">
        <div className="flex gap-2">
          <img src={save} alt="" className="h-6" />
          <p className="hover:underline font-semibold">
            Add More From Wishlist
          </p>
        </div>
        <div className="text-lg">
          <img src={rightarrow} alt="" className="h-6" />
        </div>
      </div>
    </div>
  );
};
