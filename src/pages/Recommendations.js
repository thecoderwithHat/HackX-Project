// src/pages/Recommendations.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

function Recommendations() {
  const [preferences, setPreferences] = useState({ range: '', budget: '', speed: '' });
  const [recommendations, setRecommendations] = useState([]);

  const handleInputChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleGetRecommendations = () => {
    axios.post('/api/recommendations', preferences)
      .then(response => setRecommendations(response.data))
      .catch(error => console.error('Error fetching recommendations:', error));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Find Your Perfect Scooter</Typography>
      <Box component="form" sx={{ mb: 4 }}>
        <TextField label="Preferred Range" name="range" fullWidth margin="normal" onChange={handleInputChange} />
        <TextField label="Budget" name="budget" fullWidth margin="normal" onChange={handleInputChange} />
        <TextField label="Max Speed" name="speed" fullWidth margin="normal" onChange={handleInputChange} />
        <Button variant="contained" color="primary" onClick={handleGetRecommendations}>Get Recommendations</Button>
      </Box>
      <Typography variant="h5">Recommended Scooters</Typography>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec.model} - {rec.description}</li>
        ))}
      </ul>
    </Container>
  );
}

export default Recommendations;
