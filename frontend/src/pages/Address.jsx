import { Bagbar } from "../components/Bagbar";
import { AddressBody } from "../components/AddressBody";
export const Address = () => {
  return (
    <div className="">
      <div className="fixed top-0 w-full">
        <Bagbar />
      </div>
      <div className="mt-20">
        <AddressBody></AddressBody>
      </div>
    </div>
  );
};
