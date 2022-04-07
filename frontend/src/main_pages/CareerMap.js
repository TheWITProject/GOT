import "./CareerMap.css";
import CardGrid from "../components/CardGrid.js";
import InteractiveBackground from "../components/InteractiveBackground.js";
import "@fontsource/poppins";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { Parallax, Background } from "react-parallax";
import logo from "./background.png"
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

function CareerMap() {
  return (
    <div>
      <InteractiveBackground/>
      
        <div style={styles}>
    <Parallax bgImage={logo} bgImageSize={{height: '30px', maxWidth: '30px'}} strength={200}>
      <div style={{ height: 900 }}>
      <Header/>
      </div>
    </Parallax>
    <Parallax strength={100}>
      <div style={{ height:"100%", display: "inline-block"}}>
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
    </Parallax>
    <Parallax strength={200}>
      <div style={{ opacity: .5 , backgroundColor: "#F08063", height: 300 }}>
      <Footer/>
      </div>
    </Parallax>
    </div>
    </div>
  );
}

export default CareerMap;
