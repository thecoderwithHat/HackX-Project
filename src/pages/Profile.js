// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import axios from 'axios';

function Profile() {
  const [customerInfo, setCustomerInfo] = useState({});
  const [scooterLifecycle, setScooterLifecycle] = useState([]);

  useEffect(() => {
    axios.get('/api/customer-info')
      .then(response => setCustomerInfo(response.data))
      .catch(error => console.error('Error fetching customer info:', error));

    axios.get('/api/scooter-lifecycle')
      .then(response => setScooterLifecycle(response.data))
      .catch(error => console.error('Error fetching scooter lifecycle:', error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Your Profile</Typography>
      <Typography variant="h6">Name: {customerInfo.name}</Typography>
      <Typography variant="h6">Email: {customerInfo.email}</Typography>
      <Button variant="contained" color="secondary" sx={{ mt: 2 }}>Edit Profile</Button>
      
      <Typography variant="h5" sx={{ mt: 4 }}>Scooter Lifecycle</Typography>
      <List>
        {scooterLifecycle.map((stage, index) => (
          <ListItem key={index}>
            <ListItemText primary={stage.status} secondary={stage.date} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Profile;
