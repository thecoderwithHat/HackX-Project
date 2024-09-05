import React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import {
  ElectricScooter as ElectricScooterIcon,
  TrendingUp as TrendingUpIcon,
  Security as SecurityIcon
} from '@mui/icons-material';

const Home = () => {

  const features = [
    {
      icon: <ElectricScooterIcon />,
      title: 'AI-Driven Recommendations',
      description: 'Get personalized scooter suggestions based on your preferences.'
    },
    {
      icon: <TrendingUpIcon />,
      title: 'Real-Time Tracking',
      description: `Track your scooter's journey from the manufacturer to your doorstep.`
    },
    {
      icon: <SecurityIcon />,
      title: 'Comprehensive Customer Management',
      description: 'Manage your purchase and service history all in one place.'
    }
  ];

  const whyChooseUs = [
    {
      title: '1000+ Scooters Sold',
      description: 'Helping customers across the country make the transition to electric.'
    },
    {
      title: '5-Star Customer Rating',
      description: 'Rated highly for our service and customer satisfaction.'
    },
    {
      title: 'Nationwide Coverage',
      description: 'Available in over 100 cities across India.'
    }
  ];

  const howItWorks = [
    { step: '1. Select Your Scooter', description: 'Browse our wide range of electric scooters.' },
    { step: '2. Get Personalized Advice', description: 'Receive recommendations based on your needs.' },
    { step: '3. Enjoy Your Ride', description: 'Get on the road with your new electric scooter.' },
    { step: '4. Secure Payment', description: 'Pay securely through our secure payment gateway.' }
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("/path/to/hero-image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          py: 8,
          px: 2
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: '4rem', fontWeight: 'bold' }}>
            Welcome to BIKESETU
          </Typography>
          <Typography variant="h5" paragraph sx={{ fontSize: '1.5rem' }}>
            Simplifying the process of buying electric scooters with advanced tracking, AI-driven recommendations, and comprehensive customer management.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              backgroundColor: '#4caf50',
              '&:hover': {
                backgroundColor: '#45a049'
              }
            }}
          >
            Explore Scooters
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Key Features of BIKESETU
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: '0.3s', '&:hover': { transform: 'translateY(-10px)' } }}>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Box sx={{ fontSize: 60, color: '#2196f3', mb: 2 }}>{feature.icon}</Box>
                  <Typography gutterBottom variant="h5" component="h3">{feature.title}</Typography>
                  <Typography variant="body1">{feature.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Why Choose BIKESETU?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {whyChooseUs.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" component="h3" gutterBottom>{item.title}</Typography>
                  <Typography variant="body1">{item.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          How It Works
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {howItWorks.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h5" component="h3" gutterBottom>{item.step}</Typography>
                <Typography variant="body1">{item.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: '#2196f3', color: 'white', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom>
            Ready to Go Electric?
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              backgroundColor: 'white',
              color: '#2196f3',
              '&:hover': {
                backgroundColor: '#e0e0e0'
              }
            }}
          >
            Get Started Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

