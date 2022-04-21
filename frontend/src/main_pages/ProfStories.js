import "./ProfStories.css";
import CardGrid from "../components/CardGrid/CardGrid.js";
import InteractiveBackground from "../components/InteractiveBackground.js";
import "@fontsource/poppins";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer.js";
import { Parallax} from "react-parallax";
import landingPage from "../assets/graphics/landingPage.png";
import TabCollection from "../components/TabCollection/TabCollection.js";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
function ProfStories() {
  return (
    <div>
      
          <div style={{ height: "100%", display: "inline-block" }}>
            <CardGrid cardType={"careerMap"} />
          </div>
        
        <Parallax strength={200}>
          <div
            style={{ opacity: 0.5, backgroundColor: "#F7C6BC", height: 300 }}
          >
            <Footer />
          </div>
        </Parallax>
      </div>
    
  );
}

export default ProfStories;
