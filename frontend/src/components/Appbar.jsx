import React, { useState } from "react";
import person from "../assets/person.svg";
import heart from "../assets/heart.svg";
import bag from "../assets/shopping-bag.svg";
import { Link, useNavigate } from "react-router-dom";

export const Appbar = () => {
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [isMenHovered, setIsMenHovered] = useState(false);
  const navigate = useNavigate();

  const isLogged = window.localStorage.getItem("isLoggedIn");

  function handleWishlist() {
    console.log("value of isLogged" + isLogged);
    if (isLogged === "false") {
      console.log("yaha tak aaya");
      navigate("/login");
    } else {
      navigate("/wishlist");
    }
  }

  function handleBag() {
    console.log("hello");
    if (isLogged === "true") {
      navigate("/bag");
    } else {
      navigate("/login");
    }
  }

  function handleLogout() {
    window.localStorage.setItem("isLoggedIn", false);
    window.localStorage.removeItem("user");
    navigate("/");
  }

  const user = JSON.parse(window.localStorage.getItem("user"));

  return (
    <div className="relative  border h-20 shadow-md flex items-center px-4">
      <div className="flex justify-between items-center gap-20">
        <div className="flex gap-8 items-center">
          <div>
            <Link to="/">
              <img
                src="https://mumbaimirror.indiatimes.com/photo/80601325.cms"
                alt="logo image"
                className="h-10"
              />
            </Link>
          </div>
          

          <div className="flex gap-6  font-semibold text-sm">
            <div className="flex h-20 relative">
              <button className="hover:border-b-4 border-pink-500">MEN</button>
            </div>
            <div className="flex h-20">
              <button className="hover:border-b-4 border-pink-500">
                WOMEN
              </button>
            </div>
            <div className="flex h-20">
              <button className="hover:border-b-4 border-pink-500">KIDS</button>
            </div>
            <div className="flex h-20">
              <button className="hover:border-b-4 border-pink-500">
                HOME & LIVING
              </button>
            </div>
            <div className="flex h-20">
              <button className="hover:border-b-4 border-pink-500">
                BEAUTY
              </button>
            </div>
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search for product"
            style={{ width: "500px", backgroundColor: "#F5F5F6" }}
            className="p-3 h-8 border bg-slate-100 rounded-md py-4"
          />
        </div>

        <div className="flex  ml-24 h-full gap-8">
          <div className="flex flex-col h-full  justify-center items-center">
            <div
              className="h-20 w-16  hover:border-b-4 border-pink-500  flex flex-col justify-center items-center"
              onMouseEnter={() => {
                setIsProfileHovered(true);
              }}
              onMouseLeave={() => {
                setIsProfileHovered(false);
              }}
            >
              <button>
                <img src={person} alt="" className="h-6" />
              </button>
              <label className="font-semibold" style={{ fontSize: "12px" }}>
                Profile
              </label>
            </div>

            {isProfileHovered && (
              <div
                className="absolute flex w-72 flex-col gap-2 text-gray-500 top-full right-25 z-10 text-md font-medium bg-white shadow-md p-4"
                onMouseEnter={() => {
                  setIsProfileHovered(true);
                }}
                onMouseLeave={() => {
                  setIsProfileHovered(false);
                }}
              >
                {
                isLogged === "true" ? (
                  <div>
                    <div>{user.fullName}</div>
                    <div>{user.email}</div>
                  </div>
                  
                ) : (
                  <div className="flex mb-2 flex-col gap-4">
                    <div className="w-20">
                      <button className="text-pink-500 border px-4 font-bold py-2" onClick={()=>{
                        navigate("/login")
                      }}>
                        LOGIN/SIGNUP
                      </button>
                    </div>
                  </div>
                )
                }

                <div className="border-t border-gray-300"></div>
                <div>
                  <ul>
                    <li>Orders</li>
                    <li>Wishlist</li>
                    <li>Gift Cards</li>
                    <li>Contact Us</li>
                    <li>Myntra Insider</li>
                  </ul>
                </div>
                <div className="border-t border-gray-300"></div>
                <div>
                  <ul>
                    <li>Myntra Credit</li>
                    <li>Coupons</li>
                    <li>Saved Cards</li>
                    <li>Saved VPA</li>
                    <li>Saved Addresses</li>
                    {<button onClick={handleLogout}>Logout</button>}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center items-center">
            <button onClick={handleWishlist}>
              <img src={heart} alt="" className="h-6" />
            </button>
            <label className="font-semibold" style={{ fontSize: "12px" }}>
              Wishlist
            </label>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button onClick={handleBag}>
              <img src={bag} alt="" className="h-6" />
            </button>
            <label className="font-semibold" style={{ fontSize: "12px" }}>
              Bag
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
