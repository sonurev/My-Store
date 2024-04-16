import React, { useState } from 'react';
import person from "../assets/person.svg";
import heart from "../assets/heart.svg";
import bag from "../assets/shopping-bag.svg";
import { Link,useNavigate } from 'react-router-dom';

export const Appbar = () => {
  const navigate = useNavigate();
  function handleWishlist(){
    navigate("/wishlist")
  }
  function handleBag(){
    navigate("/bag")
  }


  return (
    <div className='relative border h-20 shadow-md flex items-center px-4'>
      <div className='flex justify-between items-center gap-20'>
        <div className='flex gap-8 items-center'>
          <div>
            <Link to="/"><img src="https://mumbaimirror.indiatimes.com/photo/80601325.cms" alt="logo image" className='h-10' /></Link>
          </div>
          <div className='flex gap-6 font-semibold'>
          <div className="flex h-20">
  <button className="hover:border-b-4 border-pink-500">MEN</button>
</div>
<div className="flex h-20">
  <button className="hover:border-b-4 border-pink-500">WOMEN</button>
</div>
<div className="flex h-20">
  <button className="hover:border-b-4 border-pink-500">KIDS</button>
</div>
<div className="flex h-20">
  <button className="hover:border-b-4 border-pink-500">HOME & LIVING</button>
</div>
<div className="flex h-20">
  <button className="hover:border-b-4 border-pink-500">BEAUTY</button>
</div>

          </div>                                                              
        </div>
        
        <div className='flex gap-60 items-center'>
          <div>
            <input type="text" placeholder="Search for product" style={{ width: "500px", backgroundColor: "#F5F5F6" }} className='p-3 h-8 border bg-slate-100 rounded-md py-4' />
          </div>
          <div className='flex gap-8'>
            <div className='flex flex-col justify-center items-center'>
              <button><img src={person} alt="" className='h-6' /></button>
              <label className='font-semibold' style={{ fontSize: "12px" }}>Profile</label>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <button onClick={handleWishlist}><img src={heart} alt="" className='h-6' /></button>
              <label className='font-semibold' style={{ fontSize: "12px" }}>Wishlist</label>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <button onClick={handleBag}><img src={bag} alt="" className='h-6' /></button>
              <label className='font-semibold' style={{ fontSize: "12px" }}>Bag</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
