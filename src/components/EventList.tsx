import Grid from "@mui/material/Grid2";
import EventCard from "./card/EventCard";
import EventCardSkeleton from "./loader/EventCardSkeleton";
import { Box, Button, Typography } from "@mui/material";
import { Event } from "../utils/interface";

interface EventListItemProps{
  isLoading: boolean;
  events: Event[]
}

export default function EventList({ events, isLoading }: EventListItemProps) {
  if (isLoading) {
    return <EventCardSkeleton count={6} />;
  }

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems:"center", py: 10 }}>
        <Typography variant="h4" sx={{ color: "#000", fontSize:{xs:"16px", md:"18px"}, fontWeight: "800" }}>
          Upcoming Events
        </Typography>
        <Button
          variant="text"
          sx={{
            color: "primary.main",
            fontWeight: "800",
            textTransform: "none",
          }}
          size="small"
        >
          View all trending events ↗
        </Button>
      </Box>
      <Grid container spacing={3}>
        {events?.length > 0 ? (
          events
            ?.slice(0, 6)
            .map(
              (event: Event) => (
                <Grid size={{ xs: 12, md: 4, sm: 6 }} key={event.id}>
                  <EventCard
                    img={event.imageUrl}
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    description={event.description}
                    link={`/event/?id=${event.id}`}
                  />
                </Grid>
              )
            )
        ) : (
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              py: 5,
              fontWeight: "900",
              width: "100%",
            }}
          >
            No data found
          </Typography>
        )}
      </Grid>
    </>
  );
}
