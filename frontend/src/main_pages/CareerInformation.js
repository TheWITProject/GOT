import "./CareerInformation.css";
import Header from "../components/Header/Header.js";
import TabCollection from "../components/TabCollection";
import InteractiveBackground from "../components/InteractiveBackground.js";
import { Parallax} from "react-parallax";
import "@fontsource/poppins";

function CareerInformation() {
  return (
    <div>
      <InteractiveBackground />
      <div id="position">

          <div style={{ float:"top", height: 200 , width:"100%", backgroundColor:"white"}}>
            <Header />
          </div>
       
          <div style={{ float:"bottom", height: 200, width:"fit-content", overflow: "hidden"}}>
            <TabCollection/>
          </div>
      </div>
    </div>
  );
}

export default CareerInformation;
