import React from "react";
import { Box, Typography, Link, Grid2 } from "@mui/material";
import Grid from "@mui/material/Grid2";
const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#432361", // The background color from the design
        color: "#fff", // White text color
        padding: "40px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        // flexWrap: "wrap",
        // '& > *': {
      }}
    >
      <Box >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          rendezvous
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Your Personal Event Sherpa: Curating Awesome, One Click at a Time.
        </Typography>
      </Box>

      <Grid
        container
        sx={{  width: "50%" }}
        spacing={3}
      >
        {/* Feature Links */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Feature
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="hover" color="inherit">
              Events discovery
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="hover" color="inherit">
              Ticketing
            </Link>
          </Typography>
        </Grid>

        {/* Company Links */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Company
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="hover" color="inherit">
              About us
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="hover" color="inherit">
              FAQs
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="hover" color="inherit">
              Careers
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="hover" color="inherit">
              Support
            </Link>
          </Typography>
        </Grid>

        {/* Contact Information */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contact us
          </Typography>
          <Typography variant="body2">
            <Link
              href="mailto:info@events.com"
              underline="hover"
              color="inherit"
            >
              info@events.com
            </Link>
          </Typography>
          <Typography variant="body2">+234 701 345 6789</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Race Course, 8/9 Marina,
            <br />
            Onikan, Lagos Lagos, 44a Force Rd,
            <br />
            Lagos Island 102273, Lagos
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
