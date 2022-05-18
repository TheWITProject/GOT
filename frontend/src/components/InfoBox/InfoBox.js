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
          <p>{props.details.salary}</p>
          <p>{props.details.growth_rate}</p>
          <p>{props.details.work_env}</p>
          <p>{props.details.path}</p>
        </Box>
      </div>
    );
  }
  return (
    <div>
      <Box sx={temp_box_sx} p={1}>
        <h2>Description:</h2>
        <p>{props.details.desc}</p>
        <h2>Technical Skills:</h2>
        <p>{props.details.tech_skill}</p>
        <h2>Soft Skills:</h2>
        <p>{props.details.soft_skill}</p>
        <h2>Daily Duties:</h2>
        <p>{props.details.daily_duties}</p>
        <h2>Similar Career Jobs:</h2>
        <p>{props.details.similar_jobs}</p>
      </Box>
    </div>
  );
  
}

export default InfoBox;
