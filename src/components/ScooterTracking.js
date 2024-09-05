// src/components/ScooterTracking.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

function ScooterTracking() {
  const [trackingData, setTrackingData] = useState([]);

  useEffect(() => {
    axios.get('/api/scooter-tracking')
      .then(response => setTrackingData(response.data))
      .catch(error => console.error('Error fetching tracking data:', error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Scooter Tracking</Typography>
      <List>
        {trackingData.map((scooter) => (
          <ListItem key={scooter.id}>
            <ListItemText
              primary={`Scooter: ${scooter.model}`}
              secondary={`Current Location: ${scooter.currentLocation}, Status: ${scooter.status}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ScooterTracking;
