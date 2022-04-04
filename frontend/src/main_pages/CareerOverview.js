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
            
            <Grid container spacing={2}>
            <Grid item xs={8}>
  
                <InfoBox content = {"information"}/>
                </Grid>
                <InfoBox sx={{
                        width: 400,
                        height: 500,
                        backgroundColor: 'orange',
                       
                    }} content = {"another information"}/>    
            </Grid>
        </div>
          );
}



export default CareerOverview;
