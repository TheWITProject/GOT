import Grid from "@mui/material/Grid";
import Card from "../Card.js";
import "@fontsource/poppins";

import "./CardGrid.css" 
import {careerInfo} from "../../data/careers.js"
import React, {useState,useEffect} from 'react'
import { profInfo } from "../../data/profs.js";
import { Link } from "react-router-dom";


function CardGrid(props) {
  let [career,setCareers]=useState([])
  
  useEffect(() => {
    getCareers()
  }, [])

  let getCareers = async () =>{
    let response = await fetch("/api/careers/")
    let data = await response.json()
    console.log('Data:',data)
    setCareers(data)
  }



  const careerCardTypeSX = {

    width: 250,
    height: 250,
    marginLeft: 10,
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#F2DAD5",
      opacity: [0.9, 0.8, 0.7],
    },
    border: 8,
    borderRadius: 3,

    borderColor: '#E9EBED',
  }
 

  let tempsx =
    props.cardType === "careerMap" || props.cardType === "storiesCard"
      ? careerCardTypeSX
      : undefined;
  if (props.cardType == "storiesCard") {
    return (
      <Grid container spacing={8}>
        {profInfo.map((data, key) => {
          //key is name and value is what the property is
          return (
            <Grid item key={key} xs={4}>
              <Card
                cardType={"storiesCard"}
                sx={tempsx}
                text={data.careerName}
                image={data.imageName}
              />

            </Grid>
          );
        })}
      </Grid>
    );
  }
  return (
    <Grid container spacing={8}>
      {careerInfo.map((data, key) => {
        //key is name and value is what the property is
        return (
          <Grid item key={key} xs={4}>
            <Card
              cardType={"careerMap"}
              sx={tempsx}
              text={data.careerName}
              image={data.imageName}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CardGrid;
