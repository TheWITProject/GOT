import './CareerMap.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";





function CareerOverview() {
    return (
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          );
}



export default CareerOverview;
