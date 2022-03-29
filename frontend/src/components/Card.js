import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

function Card(props) {
  const defaultCardTypeSX ={
    width: 250,
    height: 250,
    marginLeft: 10,
    backgroundColor: 'orange',
    '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
    },
  }
  let tempsx = props.sx ? props.sx : defaultCardTypeSX //? is if else
  return (
    <div>
      <Link to="/careerinfo"><Box
        sx={tempsx}          
                    /></Link>
    </div>
  );
}

export default Card;
