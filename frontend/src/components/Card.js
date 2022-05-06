import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "./CardGrid/CardGrid.css";
import React from "react";

class Card extends React.Component {
  constructor(props){
    super(props)
    const state = {
      content: `<div>SOME MODAL</div>`
    }
    this.state = state;
  }
  render() {
    const defaultCardTypeSX = {
      width: 250,
      height: 250,
      backgroundColor: "orange",
      "&:hover": {
        backgroundColor: "primary.main",
        opacity: [0.9, 0.8, 0.7],
      },
    };
    let tempsx = this.props.sx ? this.props.sx : defaultCardTypeSX; //? is if else
    if (this.props.cardType === "careerMap") {
      return (
        <div>
          <Link to="/careerinfo/">
            <Box sx={tempsx}>
              <img class="icon" height="200vmin" src={this.props.image} alt="icon" />
            </Box>
          </Link>
          <h3 class="boxLabel">{this.props.text}</h3>
        </div>
      );
    } else {
      return (
        <div>
          <Box sx={tempsx} onClick={() => {
          this.props.displayModal(this.state.content)}}>
            <img class="icon" height="200vmin" src={this.props.image} alt="icon" />
          </Box>
          <h3 class="boxLabel">{this.props.text}</h3>
        </div>
      );
    }
  }
}

export default Card;
