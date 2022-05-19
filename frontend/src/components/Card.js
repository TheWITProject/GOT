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
      width: 375,
      height: 300,
      backgroundColor: "orange",
      "&:hover": {
        backgroundColor: "primary.main",
        opacity: [0.9, 0.8, 0.7],
      },
    };
    let tempsx = this.props.sx; //? is if else
    if (this.props.cardType === "careerMap") {
      return (
        <div>
          <Link to={`/careerinfo/${this.props.careerID}`} state={{ id: this.props.careerID }}>
          {/* <Link to={{`/careerinfo/${this.props.careerID}`}{ pathname: '/read'}}> */}
            <Box sx={tempsx}>
              <img class="icon" height="200vmin" width="270vmin" src={this.props.image} alt="icon" />
            </Box>
          </Link>
          <h3 class="boxLabel">{this.props.text}</h3>
        </div>
      );
    } else {
      return (
        <div>
          <Box sx={tempsx} onClick={() => {
          this.props.displayModal(this.props.content)}}>
            <img id="story" height="200vmin" width="200vmin" src={this.props.image} alt="icon" />
          </Box>
          <h3 class="boxLabel">{this.props.text}</h3>
        </div>
      );
    }
  }
}

export default Card;
