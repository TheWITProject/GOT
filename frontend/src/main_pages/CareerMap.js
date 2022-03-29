import "./CareerMap.css";
import CardGrid from "../components/CardGrid.js";
import InteractiveBackground from "../components/InteractiveBackground.js";
import "@fontsource/poppins";
import Header from "./Header";

function CareerMap() {
  return (
    <div>
      
      <InteractiveBackground />
      <div id="position">
        <Header/>
        <div id="intro">
          <h1>Career Map</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
            interdum lacus orci mi potenti sapien malesuada accumsan sed. Diam
            maecenas viverra dictumst orci pellentesque phasellus.
          </p>
        </div>
        <CardGrid cardType={"careerMap"} />
      </div>
    </div>
  );
}

export default CareerMap;
