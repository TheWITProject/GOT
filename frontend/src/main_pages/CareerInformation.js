import "./CareerInformation.css";
import Header from "./Header";
import TabCollection from "../components/TabCollection";
import InteractiveBackground from "../components/InteractiveBackground.js";
import "@fontsource/poppins";

function CareerInformation() {
  return (
    <div>
      <InteractiveBackground />
      <div id="position">
        <Header />
        <div className="CareerInformation">
          <TabCollection/>
        </div>
      </div>
    </div>
  );
}

export default CareerInformation;
