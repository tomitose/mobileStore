import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import "./Nav.css";

const Nav = () => {
  return (
      <Box sx={{ flexGrow: 1, height:"10%"}} >
        <AppBar position="static" className="nav-bar">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
  );
};

export default Nav;
