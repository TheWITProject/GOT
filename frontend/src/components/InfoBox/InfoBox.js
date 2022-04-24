import * as React from 'react';
import Box from '@mui/material/Box';


function InfoBox(props) {
  const defaultBoxSX ={
    width: 750,
    height:500,
    marginLeft: 5,
    backgroundColor: 'yellow',
    margin: '10px,12px,8px,15px',
    padding: '8px',
    
    
  }
 
  let temp_box_sx = props.sx ? props.sx : defaultBoxSX
  const stats = props.isStats
  if(stats){
    return (
      <div>
        <Box sx={temp_box_sx} p={1}>
          <h2>Statistics Go Here:</h2>
          <p>{props.details.statistic1}</p>
          <p>{props.details.statistic2}</p>
        </Box>
      </div>
    );
  }
  return (
    <div>
      <Box sx={temp_box_sx} p={1}>
        <h2>Description:</h2>
        <p>{props.details.description}</p>
        <h2>Technical Skills:</h2>
        <p>{props.details.technicalSkills}</p>
        <h2>Soft Skills:</h2>
        <p>{props.details.softSkills}</p>
        <h2>Daily Duties:</h2>
        <p>{props.details.dailyDuties}</p>
        <h2>Similar Career Jobs:</h2>
        <p>{props.details.similarJobs}</p>
      </Box>
    </div>
  );
  
}

export default InfoBox;
