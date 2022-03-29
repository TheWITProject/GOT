import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import CardGrid from './CardGrid.js';

function InfoBox(props) {
  const defaultBoxSX ={
    width: 750,
    height:500,
    marginLeft: 10,
    backgroundColor: 'primary.dark',
    '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
    },
  }
 
  let temp_box_sx = props.sx ? props.sx : defaultBoxSX 
  return (
    <div>
      <Link to="/careerinfo"><Box
        sx={temp_box_sx}  
        
        /></Link>      
    </div>
  );
}

export default InfoBox;
