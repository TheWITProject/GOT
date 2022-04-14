import "./CareerOverview.css";
import InfoBox from "../components/InfoBox.js";
import "../components/Grid.css";
import { careerDetails } from "../data/careerOverviewData.js";

const careerOverviewSX ={
  width: "fit-content(20em)",
  height: "fit-content(20em)",
  backgroundColor: "white",
  border: 4,
  borderRadius:3,
  borderColor: "#E0E0E0",
  marginLeft: 10,
  marginRight: 10,
  marginTop: 3,
  marginBottom: 3
}
function CareerOverview() {
  return (
    <div style={{overflow:"auto"}}>
      <InfoBox
        sx={careerOverviewSX}
        details={careerDetails[0]}
        isStats={false}
      />
      <InfoBox
        sx={careerOverviewSX}
        details={careerDetails[0]}
        isStats={true}
      />
    </div>
  );
}

export default CareerOverview;
