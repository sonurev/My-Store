import { Bagbar } from "../components/Bagbar";
import { AddressBody } from "../components/AddressBody";
import { BagFooter } from "../components/BagFooter";
export const Address = () => {
  return (
    <div className="">
      <div className="fixed top-0 w-full">
        <Bagbar />
      </div>
      <div className="mt-20">
        <AddressBody></AddressBody>
      </div>
      <div>
        <BagFooter></BagFooter>
      </div>
    </div>
  );
};
