import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import "./Nav.css";
import logo from "../../assets/img/logo-small.jpg";


const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "10%" }}>
      <AppBar position="static" className="nav-bar">
        <Toolbar>
            <img src={logo} alt="Logo" style={{borderRadius: "50%",marginLeft:"15px"}} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
