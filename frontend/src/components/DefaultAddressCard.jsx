export const DefaultAddressCard = ()=>{
  return <div className="w-full border py-2 shadow-sm">
    <div className="flex gap-2  ml-2 items-center">
    <input type="checkbox" id="round-checkbox" className="rounded-full appearance-none border-2 border-pink-500 checked:bg-pink-500 checked:border-transparent w-5 h-5" />
    <p className="font-semibold">SONU MEENA</p>
    <button className="border border-blue-500 px-2 rounded-xl" style={{fontSize:"12px"}}>Home</button>
    </div>
    <div className="ml-10 text-gray-500 flex flex-col pb-5 gap-2">
      <div>
        <div  style={{width:"320px"}}>A-425,Rajiv Bhawan,IIT Roorkee, Roorkee City
Roorkee, Uttarakhand - 247667</div>
      </div>
      <div>
        Mobile:<span>9698979594</span>
      </div>
      <div>
      <div>· Pay on Delivery available</div>
      </div>
      <div className="flex gap-2">
        <button className="border border-black rounded-md font-semibold py-1 px-2 " style={{fontSize:"12px"}}>REMOVE</button>
        <button className="border border-black rounded-md  font-semibold px-2 py-1  " style={{fontSize:"12px"}}>EDIT</button>
      </div>
    </div>
  </div>
}