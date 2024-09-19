import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

// interface for the card's props
interface EventCardProps {
  img: string;
  title: string;
  date: string;
  time: string;
  description: string;
  link: string;
}
// Utility function to limit description to 150 words
const limitText = (text: string, limit: number) => {
  const words = text.split(' ');
  return words?.length > limit ? words?.slice(0, limit).join(' ') + '...' : text;
};
const EventCard: React.FC<EventCardProps> = ({ img,title, date, time, description, link }) => {
  return (
    <Card variant="outlined" >
      <CardContent>
        <img src={img} alt="" width={500} loading='lazy' />
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14, color: 'gray' }} gutterBottom>
          {date} • {time}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {limitText(description, 15)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color: "primary", fontWeight:"800", textTransform:"none"}} href={link}>
          View details ↗
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
