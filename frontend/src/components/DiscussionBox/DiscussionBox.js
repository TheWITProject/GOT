import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function BoxSx() {
    return (
      <><Box
            sx={{
                p :5,
                marginRight: "10px",
                marginLeft: "10px",
                width: 1200,
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
                    width: 1200,
                    height: 300,
                    backgroundColor: 'primary.dark',
                    
                }} /><Box
                sx={{
                    m: 5,
                    p: 5,
                    marginRight: "10px",
                    marginLeft: "10px",
                    width: 1200,
                    height: 300,
                    color: "red",
                    backgroundColor: 'yellow',
                    
                }} /></>
        
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
  