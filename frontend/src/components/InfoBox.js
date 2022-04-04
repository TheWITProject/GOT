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
    
  }
 
  let temp_box_sx = props.sx ? props.sx : defaultBoxSX 
  return (
    <div>
      <Box sx={temp_box_sx}  >
        <p>{props.content}</p>
        </Box>

        
           
    </div>
  );
}

export default InfoBox;
