import { Card, CardContent, Skeleton, Typography } from '@mui/material';
import  Grid from "@mui/material/Grid2"

interface EventCardSkeletonProps {
  count: number;
}

const EventCardSkeleton = ({ count }: EventCardSkeletonProps) => {
  return (
    <Grid container spacing={3}>
      {Array.from(new Array(count)).map((_, index) => (
        <Grid size={{xs:12, sm:6, md:4}} key={index}>
          <Card sx={{ borderRadius: '12px', boxShadow: 'none', position: 'relative', overflow: 'hidden' }}>
            <Skeleton variant="rectangular" height={140} />
            <CardContent>
              <Typography variant="h5">
                <Skeleton width="60%" />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Skeleton width="40%" />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Skeleton width="100%" />
                <Skeleton width="100%" />
                <Skeleton width="80%" />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default EventCardSkeleton;
