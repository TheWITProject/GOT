import React, { Component } from 'react'
import Box from '@mui/material/Box';

export default class PostBox extends Component {
  render() {
    return (
      <Box
      sx={{
          borderRadius: "25px",
          m:5,
          p :5,
          marginRight: "10px",
          marginLeft: "10px",
          width: "fix",
          height: 300,
          backgroundColor: '#d3d3d3',
          
          
      }} />
    )
  }
}
