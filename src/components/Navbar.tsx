import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Container, Menu, MenuItem, Stack } from '@mui/material';
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
    <AppBar
    position="static"
    sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      borderRadius: '30px',
      maxWidth: '85%',
      margin: 'auto',
      boxShadow: 'none',
    }}
  >
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
        {/* Logo */}
        <Typography
          variant="h5"
          // component="h2"
          sx={{ flexGrow: 1, color: 'primary.main', fontWeight: '900' }}
        >
          rendezvous
        </Typography>

        {/* Navbar for larger screens */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'space-between',
            alignItems: 'center',
            width:'100%',
            gap: 3, // Spacing between buttons
          }}
        >
  <Stack direction={"row"} gap={3} sx={{width:"400px", margin:'auto'}}>

          <Button sx={{ color: 'primary.main', textTransform: 'none', fontWeight:'900' }}>Discover</Button>
          <Button sx={{ color: 'primary.main', textTransform: 'none', fontWeight:'900' }}>About us</Button>
          <Button sx={{ color: 'primary.main', textTransform: 'none', fontWeight:'900' }}>FAQs</Button>
          <Button sx={{ color: 'primary.main', textTransform: 'none', fontWeight:'900' }}>Contact us</Button>
  </Stack>
        {/* Login and Sign-up buttons */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Button sx={{ color: 'primary.main', textTransform: 'none', fontWeight:'900'  }}>Log in</Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              textTransform: 'none',
              px: 4,
              borderRadius: '25px',
            }}
          >
            Sign up
          </Button>
        </Box>
        </Box>


        {/* Menu button for smaller screens */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'flex', md: 'none' }, color: 'primary.main' }}
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
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                textTransform: 'none',
                borderRadius: '25px',
              }}
              fullWidth
            >
              Sign up
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </Container>
  </AppBar>
  );
};

export default Navbar;
