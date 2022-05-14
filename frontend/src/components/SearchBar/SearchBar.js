import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  backgroundColor: alpha(theme.palette.common.white, 0.95),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: "100%",
  marginBottom:15,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "fit"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#000000",
  width: "95%",
  height:"30px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(2, 2, 2, 0),
    //            placeholderTextColor="#000000" 
    // vertical padding + font size from searchIcon
    paddingLeft: "10px",
    transition: theme.transitions.create("width"),
    width: "100",
    [theme.breakpoints.up("sm")]: {
      width: "100",
      "&:focus": {
        width: "100"
      }
    }
  }
}));

export default function SearchAppBar() {
  return (
    <AppBar position={"static"} sx={{height:"50px",width:"80%",borderRadius: "30px", margin: "10px", borderColor: "#FAE1DD",borderWidth:"2px", backgroundColor:"#0000"}}>
      <Toolbar>
        <Search>
          <StyledInputBase
            placeholder="Search for a post"
            inputProps={{ "aria-label": "search" }}
          />
          <SearchIconWrapper />
            <SearchIcon  style ={{color:"#000000"}}/>

        </Search>
        </Toolbar>
 
      </AppBar>
  );
}
