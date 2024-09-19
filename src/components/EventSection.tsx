import React from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import useSWR from "swr";

// Define a type for the event data
interface EventData {
  title: string;
  image: string;
}

// Sample event data
const events: EventData[] = [
  {
    title: "Online Events",
    image: "/online.svg", // Replace with your image path
  },
  {
    title: "Physical Events",
    image: "/physical.svg", // Replace with your image path
  },
  {
    title: "Hybrid Events",
    image: "/hybrid.svg", // Replace with your image path
  },
];

const EventSection: React.FC = () => {
 
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "start",
        py: 8,
      }}
    >
      {/* Left side - Text */}
      <Box sx={{ width: "30%", marginTop:"20px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, fontSize:"32px" }}>
          Discover a World of Events Tailored Just for You.
        </Typography>
        <Button variant="contained" sx={{backgroundColor:"primary.dark"}} >
          View all events
        </Button>
      </Box>

      {/* Right side - Event Cards */}
      <Box
        sx={{ display: "flex", flexDirection: "column", width: "70%", gap: 3 }}
      >
        <Grid container spacing={3}>
          {events.map((event, index) => (
            <Grid size={{xs:12, md:6}} key={index}>
              <Card
                sx={{
                  borderRadius: "12px",
                  boxShadow: "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  // height="140"
                  image={event.image} // Event image
                  alt={event.title}
                />
                <CardContent
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)", // Centers the content
                    textAlign: "center", // Centers text horizontally
                    color: "#fff",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "400" }}
                  >
                    {event.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default EventSection;
