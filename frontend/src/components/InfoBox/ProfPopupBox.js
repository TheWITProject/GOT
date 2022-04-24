import * as React from 'react';
import Box from '@mui/material/Box';



function ProfPopupBox(props) {
  const defaultBoxSX ={
    width: 750,
    height:500,
    marginLeft: 5,
    backgroundColor: 'yellow',
    margin: '10px,12px,8px,15px',
    padding: '8px',
    
    
  }
 
  let temp_box_sx = props.sx ? props.sx : defaultBoxSX
  //const stats = props.isStats
  
  return (
    <div>

    <Box sx={temp_box_sx} >
        <h2>Hello my name is...</h2>
        <p>Name: {props.details.name}</p>
        <p>{props.details.description}</p>
        <p>Years of Experiences: {props.details.yearsExp}</p>
        <p>{props.details.short_ribs}</p>
    </Box>
      <Box sx={temp_box_sx} p={1}>
        <h2>Hi Lauren, tell us a little bit about yourself!</h2>
        <p>{props.details.ques1}</p>
        <h2>Can you tell us what you do as a Software Engineer at Meta for those who are unfamiliar?</h2>
        <p>{props.details.ques2}</p>
        <h2>How did you decide to pursue your specific career?</h2>
        <p>{props.details.ques3}</p>
        <h2>How does your company culture align with your own goals and aspirations? </h2>
        <p>{props.details.ques4}</p>
        <h2>Any advice on how to stand out and get hired for those starting off?</h2>
        <p>{props.details.ques5}</p>
        <h2>What are some must-have resources or skills you would
            recommend for your industry?</h2>
        <p>{props.details.ques6}</p>
        <h2>What programs and tools do you use everyday for work? 
            What do you like/dislike about these programs?</h2>
        <p>{props.details.ques7}</p>
        <h2>What was your big down time (failure) in jobs applying/interviews etc and 
            how did you go through that ?</h2>
        <p>{props.details.ques8}</p>

      </Box>
    </div>
  );
  
}

export default ProfPopupBox;
