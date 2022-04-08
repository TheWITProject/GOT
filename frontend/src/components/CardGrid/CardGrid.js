import Grid from '@mui/material/Grid';
import Card from '../Card.js'
import "@fontsource/poppins";
import "./CardGrid.css" 
import {careerInfo} from "../../data/careers.js"


function CardGrid(props) {
  const careerCardTypeSX ={
    width: 250,
    height: 250,
    marginLeft: 10,
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: '#F2DAD5',
        opacity: [0.9, 0.8, 0.7],
    },
    border: 8,
    borderRadius: 3,
    borderColor: '#E9EBED',
  }
  let tempsx = props.cardType === "careerMap" ? careerCardTypeSX : undefined //? is if else
  return (
    <Grid container spacing={8}>
        {careerInfo.map((data, key) => { //key is name and value is what the property is 
          return (
            <Grid item key={key} xs={4}>
<<<<<<< HEAD:frontend/src/components/CardGrid.js
                <Card sx={tempsx} text={data.careerName}/> 
=======
                <Card sx={tempsx} text={data.careerName} image ={data.imageName}/>
>>>>>>> FF_GOT25:frontend/src/components/CardGrid/CardGrid.js
            </Grid>
          );
        })} 
    </Grid>
  );
}

export default CardGrid;