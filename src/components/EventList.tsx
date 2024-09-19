import Grid from '@mui/material/Grid2';
import EventCard from './card/EventCard';
// import useSWR from 'swr';
// import EventCardSkeleton from './loader/EventCardSkeleton';
import { Box, Button, Typography } from '@mui/material';

interface EventListProps {
  events: [];  // The filtered events list
}
export default function EventList({events }: EventListProps) {
  // const {data, isLoading} = useSWR("/events?page=page")


    // if (isLoading) {
    //     return <EventCardSkeleton count={4} />; // Show 4 skeleton cards dynamically
    // }

  return (
    <>
     <Box sx={{display:'flex', justifyContent:'space-between', py:10}}>
        <Typography variant="h4" sx={{color:"#000", fontWeight:'800'}}>Upcoming Events</Typography>
        <Button variant="text" sx={{color:"primary.main", fontWeight:'800', textTransform:'none'}}  size="small">
          View all trending events
        </Button>
      </Box>
    <Grid container spacing={3}>
     
    {events?.slice(0, 4).map((event: { id: string | null | undefined; imageUrl: string; title: string; date: string; time: string; description: string; }) => (
      <Grid  size={{xs:12, md:4, sm:6}} key={event.id}>
        <EventCard
          img={event.imageUrl} 
          title={event.title} 
          date={event.date} 
          time={event.time} 
          description={event.description} 
          link={`/event/${event.id}`} 
        />
      </Grid>
    ))}
  </Grid>
    </>
    )
}