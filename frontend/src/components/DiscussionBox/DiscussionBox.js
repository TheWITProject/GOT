import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SearchBar from '../SearchBar/SearchBar';
import SelectBox from '../SelectBox/SelectBox';


export default function BoxSx() {
    return (
      <div>
      <div>
      <SearchBar/>
      <Button color="grey">Create Post</Button>
      </div>
      <SelectBox  label = {"User Type"}
                  array ={["1","2","3"]}
                  
                  />

      <SelectBox  label = {"Most Popular"}
                  array ={["Most Rated","N/A","N/A"]}
                  
                        />
      
      <SelectBox label = {"Most Relevant"}
                  array ={["N/A","N/A","N/A"]}
                  />
      
      <SelectBox label = {"Topic"}
                  array ={["SE","UI/UX","N/A"]}
                  />
      
            
      <Box
            sx={{
                p :5,
                marginRight: "10px",
                marginLeft: "10px",
                width: "fix",
                height: 300,
                color: "red",
                backgroundColor: 'yellow',
                
                
            }} />
            <Box
                sx={{
                    m: 5,
                    p: 5,
                    marginRight: "10px",
                    marginLeft: "10px",
                    width: "fix",
                    height: 300,
                    backgroundColor: 'primary.dark',
                    
                }} />
                
                <Box
                sx={{
                    m: 5,
                    p: 5,
                    marginRight: "10px",
                    marginLeft: "10px",
                    width: "fix",
                    height: 300,
                    color: "red",
                    backgroundColor: 'yellow',
                    
                }} />
                
                </div>
    );
  }



/*import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BoxComponent() {
  return (
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button color="red">Save</Button>
    </Box>
  );
}*/
  