import React from "react";
import "./CareerOverview.css";
import InfoBox from "../components/InfoBox/InfoBox.js";
import "../components/Grid.css";
import { careerDetails } from "../data/careerOverviewData.js";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const careerOverviewSX = {
  width: "fit-content(20em)",
  height: "fit-content(20em)",
  backgroundColor: "white",
  border: 4,
  borderRadius: 3,
  borderColor: "#E0E0E0",
  marginLeft: 10,
  marginRight: 10,
  marginTop: 3,
  marginBottom: 3,
};
function CareerOverview() {
  let [overview, setOverview] = useState([]);
  useEffect(() => {
    getOverview();
  }, []);

  let getOverview = async () => {
    let response = await fetch("/api/careeroverviews/softwareengineer"); //CHANGED THIS
    let data = await response.json();
    console.log("Overview:", data);
    setOverview(data);
  };
  
  let location = useLocation();
  console.log(location);

    return (
      <div style={{ overflow: "auto" }}>
        <InfoBox sx={careerOverviewSX} details={overview} isStats={false} />
        <InfoBox sx={careerOverviewSX} details={overview} isStats={true} />
      </div>
    );
  
}

export default CareerOverview;
