import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Card from '../components/Card.js';

function CardGrid(props) {
  const careerCardTypeSX ={
    width: 250,
    height: 250,
    marginLeft: 10,
    backgroundColor: 'red',
    '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
    },
  }
  let tempsx = props.cardType === "careerMap" ? careerCardTypeSX : undefined //? is if else
  return (
    <Grid container spacing={8}>
        <Grid item xs={4}>
            <Card sx={tempsx}/>
        </Grid>

        <Grid item xs={4}>
            <Card/>
        </Grid>

        <Grid item xs={4}>
            <Card/>
        </Grid>

        <Grid item xs={4}>
            <Card/>
        </Grid>

        <Grid item xs={4}>
            <Card/>
        </Grid>

        <Grid item xs={4}>
            <Card/>
        </Grid>

        <Grid item xs={4}>
            <Card/>
        </Grid>
        
        <Grid item xs={4}>
            <Card/>
        </Grid>
        <Grid item xs={4}>
            <Card/>
        </Grid>
    </Grid>
  );
}

export default CardGrid;