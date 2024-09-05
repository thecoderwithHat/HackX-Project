// src/pages/CustomerPortal.js
import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import axios from 'axios';

function CustomerPortal() {
  const [scooters, setScooters] = useState([]);

  useEffect(() => {
    axios.get('/api/scooters')
      .then(response => setScooters(response.data))
      .catch(error => console.error('Error fetching scooters:', error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Scooters Available</Typography>
      <Grid container spacing={3}>
        {scooters.map((scooter) => (
          <Grid item xs={12} md={4} key={scooter.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{scooter.model}</Typography>
                <Typography variant="body2">{scooter.description}</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>View Details</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CustomerPortal;
