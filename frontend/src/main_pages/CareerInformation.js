import React from 'react';
import "./CareerInformation.css";
import Header from "../components/Header/Header.js";
import TabCollection from "../components/TabCollection/TabCollection.js";
import InteractiveBackground from "../components/InteractiveBackground.js";
import { Parallax} from "react-parallax";
import "@fontsource/poppins";
import {useLocation} from "react-router-dom";

function CareerInformation() {
  let location = useLocation()
  let pageID = location.state.id
  let pageTitle = location.state.title
  console.log(pageID)
  return (
    <div>
      <InteractiveBackground />
      <div id="position">

          <div style={{ float:"top", height: 200 , width:"100%", backgroundColor:"white"}}>
            <Header />
          </div>
       
          <div style={{ float:"bottom", overflow: "auto"}}>
            <TabCollection pageID={pageID} pageTitle={pageTitle}/>
          </div>
      </div>
    </div>

  );
}

export default CareerInformation;
