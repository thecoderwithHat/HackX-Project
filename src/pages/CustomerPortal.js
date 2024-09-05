// src/pages/CustomerPortal.js
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import scooters from '../ScooterData'; // Import the scooter data

// Styled components using MUI
const ScooterCard = styled(Card)({
  backgroundColor: '#1e1e1e', /* Darker background for card */
  borderRadius: '10px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)', /* Lift effect on hover */
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
  },
});

const ScooterButton = styled(Button)({
  marginTop: '1rem',
  backgroundColor: '#00a8ff',
  color: '#ffffff',
  borderRadius: '5px',
  padding: '0.5rem 1.5rem',
  textTransform: 'none',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#0097e6',
  },
});

const ScooterMedia = styled(CardMedia)({
  height: 200,
  borderRadius: '10px 10px 0 0',
});

function CustomerPortal() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" sx={{ color: '#00a8ff', mb: 4, textAlign: 'center' }}>
        Explore Our Scooters
      </Typography>
      <Grid container spacing={4}>
        {scooters.map((scooter) => (
          <Grid item xs={12} sm={6} md={4} key={scooter.id}>
            <ScooterCard>
              <ScooterMedia component="img" image={process.env.PUBLIC_URL + scooter.image} title={scooter.name} />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#ffffff' }}>
                  {scooter.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 1 }}>
                  Price: {scooter.price}
                </Typography>
                <Typography variant="body2" sx={{ color: '#b3b3b3', mb: 2 }}>
                  Range: {scooter.range}
                </Typography>
                <ScooterButton variant="contained">View Details</ScooterButton>
              </CardContent>
            </ScooterCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CustomerPortal;
