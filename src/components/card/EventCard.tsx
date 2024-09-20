import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { formatDate, formatTime, limitText } from '../../utils/helper';
import { EventCardProps } from '../../utils/interface';

const EventCard = ({ img,title, date, time, description, link }: EventCardProps) => {
  return (
    <Card variant="outlined" sx={{padding:0, borderRadius:5}} >
        <img src={img} alt="" style={{width:"100%"}} loading='lazy' />
      <CardContent>
        <Typography variant="h6" component="div" sx={{fontWeight:600}}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14, color: '#000', fontWeight:600 }} gutterBottom>
          {formatDate( date)} • {formatTime(time)}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"14px"}}>
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
