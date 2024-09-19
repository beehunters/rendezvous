import Grid from '@mui/material/Grid2';
import EventCard from './card/EventCard';
import useSWR from 'swr';

export default function EventList() {
    const {data} = useSWR("/events?page=page")

  return (
    <Grid container spacing={3}>
    {data?.data.allEvents?.slice(0, 4).map((event: { id: string | null | undefined; imageUrl: string; title: string; date: string; time: string; description: string; }) => (
      <Grid  size={{xs:12, md:4, sm:6}} key={event.id}>
        <EventCard
          img={event.imageUrl} // Pass the event image
          title={event.title} // Pass the event title
          date={event.date} // Pass the event date
          time={event.time} // Pass the event time
          description={event.description} // Pass the event description
          link={`/event/${event.id}`} // Link to event details (example)
        />
      </Grid>
    ))}
  </Grid>
    )
}