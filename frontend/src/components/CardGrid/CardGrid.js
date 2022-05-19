
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
  let [story,setStories]= useState([])
  
  useEffect(() => {
    getCareers()
  }, [])
  useEffect(() => {
    getStories()
  }, [])

  let getCareers = async () =>{
    let response = await fetch("/api/careers/")
    let data = await response.json()
    console.log('Data:',data)
    setCareers(data)
  }
  let getStories= async () =>{
    let response = await fetch(`/api/stories/${props.pageID}`)
    let data = await response.json()
    console.log('Stories:',data)
    setStories(data)
  }

  //axios package used to call data
  


  const careerCardTypeSX = {

    width: 280,
    height: 210,
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
 
  const storiesCardTypeSX = {

    width: 200,
    height: 210,
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
    props.cardType === "careerMap" 
      ? careerCardTypeSX
      : storiesCardTypeSX;
  
  if (props.cardType == "storiesCard") {
    return (
      <Grid container spacing={8} >
        {story.map((data, key) => {
          //key is name and value is what the property is
          return (
            <Grid item key={key} xs={4}>
              <Card
                cardType={"storiesCard"}
                sx={storiesCardTypeSX}
                text={data.name}
                image={data.imagePath}
                displayModal={props.displayModal}
                content={data}
              />

            </Grid>
          );
        })}
      </Grid>
    );
  }
  return (
    <Grid container spacing={8}>
      {career.map((data, key) => {
        //key is name and value is what the property is
        return (
          <Grid item key={key} xs={4}>
            <Card
              cardType={"careerMap"}
              sx={careerCardTypeSX}
              careerID={data.careerID}
              text={data.careerName}
              image={data.imagePath}
              displayModal={props.displayModal}
              careerId ={data.careerId}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CardGrid;
