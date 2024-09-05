// src/pages/Home.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Home() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to the BIKESETU Platform
        </Typography>
        <Typography variant="body1">
          Simplifying the process of buying electric scooters with advanced tracking, AI-driven recommendations, and comprehensive customer management.
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
