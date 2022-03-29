import "./CareerMap.css";
import CardGrid from "../components/CardGrid.js";
import InteractiveBackground from "../components/InteractiveBackground.js";

function CareerMap() {
  return (
    <div>
      <InteractiveBackground />
      <div id="position">
        <p>Welcome to Career Map!</p>
        <CardGrid cardType={"careerMap"} />
      </div>
    </div>
  );
}

export default CareerMap;
