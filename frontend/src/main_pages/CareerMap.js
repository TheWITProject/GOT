import './CareerMap.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import CardGrid from '../components/CardGrid.js';




function CareerMap() {
    return (
        <div>
            <p>Welcome to Career Map!</p>
            <CardGrid cardType = {"careerMap"}/>
        </div>
    );
}

export default CareerMap;
