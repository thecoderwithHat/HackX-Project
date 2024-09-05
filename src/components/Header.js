import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          BIKESETU Platform
        </Typography>
        <Button color="inherit" component={NavLink} to="/">Home</Button>
        <Button color="inherit" component={NavLink} to="/scooters">Scooters</Button>
        <Button color="inherit" component={NavLink} to="/recommendations">Recommendations</Button>
        <Button color="inherit" component={NavLink} to="/profile">Profile</Button>
        <Button color="inherit" component={NavLink} to="/admin">Admin</Button>
        <Button color="inherit" component={NavLink} to="/franchisee">Franchisee</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
