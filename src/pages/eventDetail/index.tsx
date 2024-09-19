import {
  Box,
  Button,
  // Card,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Navbar from "../../components/Navbar";
import { FaRegClock } from "react-icons/fa";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import MyMapComponent from "../../components/MapComponent";
import EmailIcon from "../../components/icons/EmailIcon";
import InstagramIcon from "../../components/icons/InstagramIcon";
import TwitterIcon from "../../components/icons/TwitterIcon";
import { RxPerson } from "react-icons/rx";
import Grid from "@mui/material/Grid2";
// Helper function to format the date
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Helper function to format the time
const formatTime = (timeString: string) => {
  const [hours, minutes] = timeString.split(":");
  const date = new Date();
  date.setHours(parseInt(hours));
  date.setMinutes(parseInt(minutes));
  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};
export default function EventDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useSWR("/events?page=page");

  // If loading, show a loading spinner
  if (isLoading) {
    return <CircularProgress />;
  }

  // If there is an error fetching data, show an error message
  if (error) {
    return (
      <Typography variant="h6" color="error">
        Failed to load event data.
      </Typography>
    );
  }

  // Find the specific event by its ID
  const event = data?.data.allEvents.find(
    (event: { id: string }) => event.id === id
  );
  console.log(event);
  // If event is not found, display a message
  if (!event) {
    return <Typography variant="h6">Event not found!</Typography>;
  }

  return (
    <>
      <Navbar />
      <Box sx={{ padding: "0 150px" }}>
        <Box sx={{ width: "100%", height: "70vh", overflow: "hidden" }}>
          <img
            src={event.imageUrl}
            alt={event.title}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "20px",
              objectFit: "cover", // Ensures the image covers the container while maintaining aspect ratio
            }}
          />{" "}
        </Box>
        <Grid container justifyContent={"space-between"} alignItems={"end"}>
          {/* Description */}
          <Grid size={{xs:12, sm:6}}>
            <Stack
              sx={{ mt: 5 }}
              direction="row"
              alignItems={"end"}
              justifyContent={"space-between"}
            >
              <Stack gap={2}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "900", fontSize: "16px" }}
                >
                  {event?.title}
                </Typography>
                <Box sx={{ display: "flex", gap: 10 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "400",
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      fontSize: "16px",
                    }}
                  >
                    {" "}
                    <CiCalendar style={{ color: "#9B51E0" }} />{" "}
                    {formatDate(event.date)}{" "}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: " 400",
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      fontSize: "16px",
                    }}
                  >
                    {" "}
                    <FaRegClock style={{ color: "#9B51E0" }} />{" "}
                    {formatTime(event.time)}{" "}
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: " 400",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    fontSize: "16px",
                  }}
                >
                  {" "}
                  <CiLocationOn style={{ color: "#9B51E0" }} /> {event.address}{" "}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: " 400",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    fontSize: "16px",
                  }}
                >
                  {" "}
                  <RxPerson style={{ color: "#9B51E0" }} />{" "}
                  {event.organizer.name}{" "}
                </Typography>
              </Stack>
           
            </Stack>
            {/* Description with map */}
            <Stack alignItems={"center"} gap={10} direction="row">
              <Box sx={{ mt: 5,  }}>
                <Typography sx={{ fontWeight: "900", fontSize: "16px" }}>
                  {"Event Description"}
                </Typography>

                <Typography
                  sx={{
                    fontWeight: " 400",
                    fontSize: "16px",
                    mt: 5,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  {" "}
                  {event.description}{" "}
                </Typography>
              </Box>
            </Stack>
          </Grid>
          {/* Map */}
          <Grid size={{xs:12, sm:4}}>
                <Typography sx={{ fontWeight: "900", fontSize: "16px" }}>
                  {"Contact Organizers"}
                </Typography>
                <Stack direction="row" gap={3} mt={2}>
                  <EmailIcon /> <TwitterIcon /> <InstagramIcon />{" "}
                </Stack>
            <Stack gap={3} sx={{ width: "100%" }}>
              <Typography sx={{ fontWeight: "900", mt: 5, fontSize: "16px" }}>
                {"Direction"}
              </Typography>
              <MyMapComponent lat={event.lat} long={event.long} />
            </Stack>
          </Grid>
        </Grid>

        <Box
      sx={{
        borderRadius: '8px',
        padding: '16px',
        // textAlign: 'center',
        maxWidth: '300px',
        // margin: '0 auto',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
        Tickets Pricing
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        {/* Single Ticket */}
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Single
          </Typography>
          <Typography variant="body1" sx={{ color: '#9C27B0', fontWeight: 'bold' }}>
            NGN 5,000
          </Typography>
        </Box>
        {/* Pair Ticket */}
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Pair
          </Typography>
          <Typography variant="body1" sx={{ color: '#9C27B0', fontWeight: 'bold' }}>
            NGN 9,000
          </Typography>
        </Box>
      </Box>

      {/* Buy Now Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: '#9C27B0',
          color: '#FFFFFF',
          textTransform: 'none',
          // borderRadius: '24px',
          padding: '10px 20px',
          fontSize: '16px',
        }}
      >
        Buy now
      </Button>
    </Box>
      </Box>
    </>
  );
}
