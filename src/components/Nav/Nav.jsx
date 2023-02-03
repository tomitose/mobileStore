import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/img/logo-small.jpg";


const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "10%" }}>
      <AppBar position="static" className="nav-bar">
        <Toolbar>
          <Link to={"/"}>
            <img src={logo} alt="Logo" style={{borderRadius: "50%",marginLeft:"15px"}} />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
