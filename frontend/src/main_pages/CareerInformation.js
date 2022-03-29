
import './CareerInformation.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import CardGrid from '../components/CardGrid.js';
import InfoBox from '../components/InfoBox.js';
import CareerOverview from './CareerOverview';

function CareerInformation() {
  return (
    <div className="CareerInformation">
      <h1>Welcome to Software Engineering!!</h1>
      
      <CareerOverview/>
    </div>

  );
}

export default CareerInformation;
