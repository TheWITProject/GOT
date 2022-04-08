import "./CareerOverview.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import CardGrid from "../components/CardGrid/CardGrid.js";
import InfoBox from "../components/InfoBox.js";
import { blue, blueGrey, deepOrange } from "@mui/material/colors";
import Logo from "../assets/logos/logo.png";
import { getListItemSecondaryActionClassesUtilityClass } from "@mui/material";
import "../components/Grid.css";
import { careerDetails } from "../data/careerOverviewData.js";

function CareerOverview() {
  return (
    <div>
      <p>Welcome to Career Overview!</p>
      <InfoBox
        sx={{
          width: "fit-content(20em)",
          height: "fit-content(20em)",
          backgroundColor: "orange",
          margin: 10,
        }}
        details={careerDetails[0]}
        isStats={false}
      />
      <InfoBox
        sx={{
          width: "fit-content(20em)",
          height: "fit-content(20em)",
          backgroundColor: "orange",
          margin: 10,
        }}
        details={careerDetails[0]}
        isStats={true}
      />
    </div>
  );
}

export default CareerOverview;
