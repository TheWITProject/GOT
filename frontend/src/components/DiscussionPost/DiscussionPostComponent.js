import React, { Component } from 'react'
import Box from '@mui/material/Box';
import "../DiscussionPost/DiscussionPostComponent.css"; 

export default class DiscussionPost extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props.author)
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
      <Box
      sx={{
          borderRadius: "25px",
          m:5,
          p :5,
          marginRight: "10px",
          marginLeft: "10px",
          width: "92%",
          height: "250px",
          backgroundColor: '#f0f0f0',
          
          
      }}>
        <h2 id="postTitle">
              {this.props.title}
        </h2>
        <div style={{display:"flex",flexDirection:"row",justifyContent: "space-between",margin:"0px"}}>
        <h3 id="postAuthor">
          {this.props.author}
        </h3>
        <h3 id="postDate">
          {this.props.date}
        </h3>
        </div>
      
        <p id="postContent">
        {this.props.content}
        </p>
      </Box>
      </div>
    )
  }
}
