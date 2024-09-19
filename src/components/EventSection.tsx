import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { EventData } from "../utils/interface";


const events: EventData[] = [
  {
    title: "Online Events",
    image: "/online.svg", 
  },
  {
    title: "Physical Events",
    image: "/physical.svg", 
  },
  {
    title: "Hybrid Events",
    image: "/hybrid.svg", 
  },
];

const EventSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {md:"row", xs:"column"},
        justifyContent: "space-between",
        gap:3,
        alignItems: {xs:"center", md:"start"},
        py: 8,
      }}
    >
      {/* Left side - Text */}
      <Box sx={{ width: {md:"30%", xs:"100%"}, marginTop: "20px" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", mb: 2, fontSize: "32px" }}
        >
          Discover a World of Events Tailored Just for You.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: "primary.dark" }}>
          View all events 
        </Button>
      </Box>

      {/* Right side - Event Cards */}
      <Box
        sx={{ display: "flex", flexDirection: "column", width: {md:"70%", xs:"100%"}, gap: 3 }}
      >
        <Grid container spacing={3}>
          {events.map((event, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
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
