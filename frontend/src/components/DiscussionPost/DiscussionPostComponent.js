import React, { Component } from 'react'
import Box from '@mui/material/Box';
import "../DiscussionPost/DiscussionPostComponent.css"; 

export default class DiscussionPost extends Component {
  render() {
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
              Discussion Title Goes Here
        </h2>
        <div style={{display:"flex",flexDirection:"row",justifyContent: "space-between",margin:"0px"}}>
        <h3 id="postAuthor">
          Author Name Goes Here
        </h3>
        <h3 id="postDate">
          Date Goes Here
        </h3>
        </div>
      
        <p id="postContent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Box>
      </div>
    )
  }
}
