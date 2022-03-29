
import './CareerInformation.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import CardGrid from '../components/CardGrid.js';
import InfoBox from '../components/InfoBox.js';

function CareerInformation() {
  return (
    <div className="CareerInformation">
      <h1>Welcome to Software Engineering!!
        <Grid item xs={2}>
          <InfoBox sx={temp_box_sx}/>
        </Grid>  
      </h1>
     
    </div>
     

  );
}

export default CareerInformation;
