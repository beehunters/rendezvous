import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import {  useSearchParams } from "react-router-dom";
import useSWR from "swr";
import Navbar from "../../components/Navbar";
import { FaRegClock } from "react-icons/fa";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import EmailIcon from "../../components/icons/EmailIcon";
import InstagramIcon from "../../components/icons/InstagramIcon";
import TwitterIcon from "../../components/icons/TwitterIcon";
import { RxPerson } from "react-icons/rx";
import Grid from "@mui/material/Grid2";
import { formatDate, formatTime } from "../../utils/helper";
import MyMapComponent from "../../components/MapComponent";


export default function EventDetail() {
  const [searchParams] = useSearchParams(); // Get search params
  const id = searchParams.get("id"); // Retrieve the event ID from the query string
  const { data, isLoading, error } = useSWR("/events?page=page");

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Typography variant="h6" color="error">
        Failed to load event data.
      </Typography>
    );
  }

  // Find the specific event by its ID
  const event = data?.data?.allEvents?.find(
    (event: { id: string }) => event?.id === id
  );

  if (!event) {
    return <Typography variant="h6">Event not found!</Typography>;
  }

  return (
    <>
      <Navbar />
      <Box sx={{ padding: {md:"0 150px", xs:"0 40px"} }}>
        <Box sx={{ width: "100%", height: {xs:"25vh", md:"60vh"}, overflow: "hidden" }}>
          <img
            src={event?.imageUrl}
            alt={event?.title}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "20px",
              objectFit: "cover", // Ensures the image covers the container while maintaining aspect ratio
            }}
          />{" "}
        </Box>
        <Grid container justifyContent={"space-between"} gap={4}  alignItems={"end"}>
          {/* Description */}
          <Grid size={{ xs: 12, sm: 6 }}>
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
                    {formatDate(event?.date)}{" "}
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
                    {formatTime(event?.time)}{" "}
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
                  <CiLocationOn style={{ color: "#9B51E0" }} /> {event?.address}{" "}
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
                  {event?.organizer?.name}{" "}
                </Typography>
              </Stack>
            </Stack>
            {/* Description with map */}
            <Stack alignItems={"center"} gap={10} sx={{flexDirection:{md:"row", xs:"column"}}} direction="row">
              <Box sx={{ mt: 5 }}>
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
                  {event?.description}{" "}
                </Typography>
              </Box>
            </Stack>
          </Grid>
          {/* Map */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography sx={{ fontWeight: "900", fontSize: "16px" }}>
              {"Contact Organizers"}
            </Typography>
            <Stack direction="row" gap={3} mt={2}>
              <a
                href={`mailto:${event?.organizer?.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <EmailIcon />
              </a>

              {/* Twitter Link */}
              <a href={event?.organizer?.twitterUrl} target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>

              {/* Instagram Link */}
              <a href={event?.organizer?.instagram} target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
            </Stack>
            <Stack gap={3} sx={{ width: "100%" }}>
              <Typography sx={{ fontWeight: "900", mt: 5, fontSize: "16px" }}>
                {"Direction"}
              </Typography>
              <MyMapComponent lat={event?.lat} long={event?.long} />
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderRadius: "8px",
            padding: "16px",
            // textAlign: 'center',
            maxWidth: "300px",
            // margin: '0 auto',
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "16px" }}
          >
            Tickets Pricing
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            {/* Single Ticket */}
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Single
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#9C27B0", fontWeight: "bold" }}
              >
                NGN {event?.price}
              </Typography>
            </Box>
            {/* Pair Ticket */}
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Pair
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#9C27B0", fontWeight: "bold" }}
              >
                NGN 9,000
              </Typography>
            </Box>
          </Box>

          {/* Buy Now Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#9C27B0",
              color: "#FFFFFF",
              textTransform: "none",
              padding: "10px 20px",
              fontSize: "16px",
            }}
          >
            Buy now
          </Button>
        </Box>
      </Box>
    </>
  );
}
