import googleplay from "../assets/googleplay.svg"
import applestore from "../assets/applestore.svg"
import facebook from "../assets/facebook.svg"
import youtube from "../assets/youtube.svg"
import twitter from "../assets/twitter.svg"
export const Footbar = ()=>{
  return <div className="w-screen mt-20 border-black h-80 flex items-center">
    <div className="w-9/12 mx-auto flex gap-20" style={{backgroundColor:"#FAFBFC"}}>
      <div>
        
          <div className="font-semibold">
            ONLINE SHOPPING
          </div>
          <div className="">
            <div>Men</div>
            <div>Women</div>
            <div>Kids</div>
            <div>Home & Living</div>
            <div>Beauty</div>
            <div>Gift cards</div>
          </div>
        </div>
        <div>
          <div className="font-semibold">
            USEFUL LINKS
          </div>
          <div className="">
            <div>Blog</div>
            <div>Careers</div>
            <div>Site Map</div>
            <div>Corporate Information</div>
            <div>WhiteHat</div>
            <div>Cleartrip</div>
          </div>
        </div>
    
      <div>
        <div className="font-semibold">CUSTOMER POLICIES</div>
        <div className="">
            <div>Contact Us</div>
            <div>FAQ</div>
            <div>T&C</div>
            <div>Terms Of Use</div>
            <div>Track Orders</div>
            <div>Shipping</div>
            <div>Cancellation</div>
            <div>Returns</div>
            <div>Privacy policy</div>
            <div>Grievance Officer</div>
          </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="font-semibold">EXPERIENCE MYNTRA APP ON MOBILE</div>
        <div>
          <div className="flex gap-5">
            <img src={googleplay} alt="google play store image"  className="h-36"/>
            <img src={applestore} alt="apple store" className="h-36" />
          </div>
        </div>
        <div>
          <div className="font-semibold text-sm">KEEP IN TOUCH</div>
          <div className="flex gap-4 mt-2">
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
}