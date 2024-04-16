
import { Link } from "react-router-dom";

export const Bagbar = () => {
  return (
    <div className="border-b h-20 flex items-center justify-between px-5">
      <div>
        <Link to="/">
          <img src="https://mumbaimirror.indiatimes.com/photo/80601325.cms" alt="logo image" className="h-10" />
        </Link>
      </div>
      <div className="flex  text-md gap-2 " style={{color:"#27BD99"}}>
        <div>
        <Link to="/bag" className="hover:border-b-2 border-pink-500">BAG</Link>
          </div>
        <div>-----------</div>
        <div>
        <Link to="/address" className="hover:border-b-2 border-pink-500">ADDRESS</Link>
          </div>
        <div>-----------</div>
        <div className="hover:border-b-2 border-pink-500">
        PAYMENT
          </div>
      </div>
      <div className="flex items-center gap-2">
        <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" alt="" className="h-8"/>
        <p>100% SECURE</p>
      </div>
    </div>
  );
};