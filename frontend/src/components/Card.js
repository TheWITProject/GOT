import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import "./CardGrid/CardGrid.css"


function Card(props) {
  const defaultCardTypeSX ={
    width: 250,
    height: 250,
    backgroundColor: 'orange',
    '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
    },
  }
  let tempsx = props.sx ? props.sx : defaultCardTypeSX //? is if else
  if(props.cardType=="careerMap"){
  return (
    <div>
      <Link to="/careerinfo">
        <Box sx={tempsx}>
          <img class = "icon" height= "200vmin" src={props.image} alt="icon"/>
        </Box>
      </Link>
      <h3 class="boxLabel">{props.text}</h3>
    </div>
  );
  }else{
    return(
    <div>
      <Link to="/careerinfo/profStory">
        <Box sx={tempsx}>
          <img class = "icon" height= "200vmin" src={props.image} alt="icon"/>
        </Box>
        </Link>
      <h3 class="boxLabel">{props.text}</h3>
      
    </div>
    );
  }
}

export default Card;