import InfoBox from "../components/InfoBox/InfoBox.js";
import "../components/Grid.css";
import {storyDetails} from "../data/profStoriesData.js";
import ProfPopupBox from "../components/InfoBox/ProfPopupBox.js"

const profStorySX ={
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
function ProfessionalStory() {
  return (
    <div style={{overflow:"auto"}}>
      <ProfPopupBox
        sx={profStorySX}
        details={storyDetails[0]}
      />
    </div>
  );
}

export default ProfessionalStory;
