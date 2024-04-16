import { Appbar } from "../components/Appbar";
import { Footbar } from "../components/Footbar";
import { Body } from "../components/Body";

export const Home = () => {
  return (
    <div>
      <Appbar style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }} />
      <div style={{ paddingTop: '40px' }}> {/* Adjust the top padding based on the height of the Appbar */}
        <Body />
      </div>
      <Footbar />
    </div>
  );
};
