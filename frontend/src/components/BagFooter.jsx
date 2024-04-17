import bagfooter from "../assets/bagfooter.png"

export const BagFooter = ()=>{
  return (<div>
      <div className="flex justify-around items-center h-14 border-t">
      <div>
        <img src={bagfooter} alt="payment option footer" className="h-12" />
      </div>
      <div>
        Neep Help ? Contact Us
      </div>
      </div>
  </div>)
}