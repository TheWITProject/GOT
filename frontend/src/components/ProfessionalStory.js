import InfoBox from "../components/InfoBox/InfoBox.js";
import "../components/Grid.css";
import {storyDetails} from "../data/profStoriesData.js";
import ProfessionalStoryContent from "../components/ProfessionalStoryContent"

const profStorySX ={
  width: "80%",
  height: "100%",
  backgroundColor: "white",
  border: 4,
  borderRadius:3,
  borderColor: "#E0E0E0",
  marginLeft: 10,
  marginRight: 10,
  marginTop: 3,
  marginBottom: 3,
  overflow: "hidden"
}
function ProfessionalStory() {
  return (
    <div>
      <ProfessionalStoryContent
        sx={profStorySX}
        details={storyDetails[0]}
      />
    </div>
  );
}

export default ProfessionalStory;
