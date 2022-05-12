import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ourButton from './ourButton';

export default class PostBox extends Component {
  render() {
    return (
      <Box component="span"
      sx={{
          display :"flex",
          flexWrap :"wrap",
          borderRadius: "25px",
          m:5,
          p :5,
          marginRight: "10px",
          marginLeft: "10px",
          width: "fix",
          height: 300,
          backgroundColor: '#d3d3d3',      
      }} >
        <ourButton/>
        </Box>
    )
  }
}
