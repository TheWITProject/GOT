import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchBar from "../components/SearchBar/SearchBar";
import SelectSmall from "../components/SelectBox/SelectBox";
import DiscussionPost from "../components/DiscussionPost/DiscussionPostComponent.js";
import "./DiscussionPage.css";

import {useLocation} from "react-router-dom";
export default function DiscussionPage() {

  return (
    <div style={{marginLeft:"70px",marginRight:"80px"}}>
  
        <div style={{ display: "flex" }}>
          <SearchBar 
            containerStyle={{backgroundColor: 'green'}}
            inputStyle={{backgroundColor: 'red'}}
     
          />
          <Button
            style={{
              width: "18%",
              borderRadius: "30px",
              backgroundColor: "#FAE1DD",
              alignItems: "center",
              color: "white",
              margin: "10px",
              fontSize: "18px",
              fontFamily: "Poppins",
              fontWeight: "bold"
            }}
          >
            Create Post
          </Button>
        </div>
    
      <SelectSmall label={"User Type"} array={["1", "2", "3"]} />

      <SelectSmall
        label={"Most Popular"}
        array={["Most Rated", "N/A", "N/A"]}
      />

      <SelectSmall label={"Most Relevant"} array={["N/A", "N/A", "N/A"]} />

      <SelectSmall label={"Topic"} array={["SE", "UI/UX", "N/A"]} />

      <DiscussionPost/>
    </div>
  );
}
