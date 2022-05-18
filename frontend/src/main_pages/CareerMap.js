
import "./CareerMap.css";
import CardGrid from "../components/CardGrid/CardGrid.js";
import InteractiveBackground from "../components/InteractiveBackground.js";
import "@fontsource/poppins";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer.js";
import { Parallax} from "react-parallax";
import landingPage from "../assets/graphics/landingPage.png";
import React, {useState,useEffect} from 'react'
import { careerInfo } from "../data/careers";



const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
function CareerMap() {


  return (
    <div>
      <InteractiveBackground />

      <div style={styles}>
        <Parallax
          bgImage={landingPage}
           bgImageSize={{ height: "5px" }}
          strength={0}
        >
          <div style={{ height: 900 }}>
            <Header />
          </div>
        </Parallax>
        <Parallax strength={100}>
          <div style={{ height: "100%", display: "inline-block" }}>
            <div id="intro">
              <h1>Career Map</h1>
              <p>
              Career map has all the careers you can explore. With your passion, strengths and your personality, and what you are looking for. A career map helps you fit in with your dream career!
              </p>
            </div>
            <CardGrid cardType={"careerMap"}/>
          </div>
        </Parallax>
        <Parallax strength={200}>
          <div
            style={{ opacity: 0.5, backgroundColor: "#F7C6BC", height: 300 }}
          >
            <Footer />
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default CareerMap;
