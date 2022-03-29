import './CareerOverview.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import CardGrid from '../components/CardGrid.js';
import InfoBox from '../components/InfoBox.js';

function CareerOverview() {
    return (
        <div>
            <p>Welcome to Career Overview!</p>
            <Grid item xs={2}>
                <InfoBox sx={temp_box_sx}/>
            </Grid>
        </div>
          );
}



export default CareerOverview;
