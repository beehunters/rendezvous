import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Container, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor:"rgba(255, 255, 255, 0.6)",  borderRadius:"30px", maxWidth:"80%", margin:'auto', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography variant="h5" component="h2" sx={{ flexGrow: 1, color: 'primary.main', fontWeight:'900' }}>
            rendezvous
          </Typography>

          {/* Navbar for larger screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button sx={{ color: 'primary', textTransform:"none" }}>Discover</Button>
            <Button sx={{ color: 'primary', textTransform:"none"}}>About us</Button>
            <Button sx={{ color: 'primary', textTransform:"none"}}>FAQs</Button>
            <Button sx={{ color: 'primary', textTransform:"none"}}>Contact us</Button>
            <Button sx={{ color: 'primary', textTransform:"none"}}>Log in</Button>
            <Button variant='text'  sx={{ ml: 2, backgroundColor:"primary.light", color:"white",  textTransform:"none", px:5 }}>Sign up</Button>
          </Box>

          {/* Menu button for smaller screens */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#ffffff' }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuItem onClick={handleMenuClose}>Discover</MenuItem>
            <MenuItem onClick={handleMenuClose}>About us</MenuItem>
            <MenuItem onClick={handleMenuClose}>FAQs</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact us</MenuItem>
            <MenuItem onClick={handleMenuClose}>Log in</MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Button variant="contained" color="secondary" fullWidth>Sign up</Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
