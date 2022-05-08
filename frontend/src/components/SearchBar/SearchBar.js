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
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.95),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: "100%",
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
  "& .MuiInputBase-input": {
    padding: theme.spacing(2, 2, 2, 0),
    //            placeholderTextColor="#000000" 
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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
    <AppBar position={"static"} sx={{width:"80%",borderRadius: "20px", margin: "10px", backgroundColor: "#FAE1DD"}}>
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
