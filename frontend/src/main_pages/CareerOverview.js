import './CareerMap.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";





function CareerOverview() {
    return (
        <div>
            <p>Welcome to Career Overview!</p>
            <CardGrid sx = {tempsx}/>
        </div>
          );
}



export default CareerOverview;
