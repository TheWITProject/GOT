import logo from '../../assets/logos/logo.png'
import "./Header.css";
import Fab from "@mui/material/Fab";
import { Stack } from "@mui/material";
import Login from '../Login/Login.js';
import Signup from '../Signup/Signup.js';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
      <img height="150vmin" src={logo} alt="Logo" />
      <Stack
        sx={{ marginRight: 5 }}
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={8}
      >
        <Link to={`/careermap/`} style={{ textDecoration: 'none' }}>
        <Fab
          sx={{ marginTop: 6 ,fontFamily:"Poppins", backgroundColor:"#E9EBED"}}
          variant="extended"
          size="medium"
          aria-label="add"
        >
          Career Map
        </Fab>
        </Link>
        
        <Login/>
        <Signup/>

      </Stack>
    </div>
  );
}

export default Header;