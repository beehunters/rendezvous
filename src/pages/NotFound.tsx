import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound= () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3" component="h1" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry, the page you're looking for does not exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/" 
      >
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFound;
