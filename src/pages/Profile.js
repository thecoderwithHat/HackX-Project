// src/pages/Profile.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Card, Box, Grid, Divider, Stepper, Step, StepLabel } from '@mui/material';
import { styled } from '@mui/system';

// Mock data for user profile
const initialProfileData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  contactNumber: '1234567890',
  orders: [
    { id: 1, model: 'Ather 450X', date: '2024-07-12', status: 'Delivered', price: 75580, lifecycleStage: 4 },
    { id: 2, model: 'Ola S1 Pro', date: '2024-05-23', status: 'Shipped', price: 56363, lifecycleStage: 3 },
  ],
};

// Lifecycle stages for the scooters
const lifecycleStages = ['Manufacturer', 'BIKESETU Yard', 'Franchisee Store', 'Customer', 'Ownership'];

// Styled components using MUI
const ProfileSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  backgroundColor: '#1f1f1f',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  marginBottom: '2rem',
  color: '#ffffff',
});

const ProfileDetail = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginBottom: '1rem',
});

const ProfileCard = styled(Card)({
  backgroundColor: '#2a2a2a',
  borderRadius: '12px',
  padding: '1.5rem',
  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
  color: '#ffffff',
  marginBottom: '1rem',
});

const ActionButton = styled(Button)({
  backgroundColor: '#00a8ff',
  color: '#ffffff',
  textTransform: 'none',
  padding: '0.5rem 1.5rem',
  '&:hover': {
    backgroundColor: '#0097e6',
  },
  marginTop: '1rem',
  width: 'fit-content',
});

const LogoutButton = styled(Button)({
  backgroundColor: '#ff4d4d',
  color: '#ffffff',
  marginTop: '1rem',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#ff1a1a',
  },
  padding: '0.5rem 1.5rem',
  width: 'fit-content',
});

function Profile() {
  const [profileData, setProfileData] = useState(initialProfileData);
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setEditMode(false);
    // Ideally, here you would send updated profile data to the server
    console.log('Profile updated:', profileData);
  };

  const handleLogout = () => {
    // Logic for logging out the user, such as clearing tokens and redirecting to the login page
    console.log('User logged out');
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" sx={{ color: '#00a8ff', mb: 4, textAlign: 'center', fontWeight: 'bold' }}>
        Profile
      </Typography>
      <ProfileSection>
        {editMode ? (
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                value={profileData.name}
                onChange={handleInputChange}
                fullWidth
                sx={{ input: { color: '#ffffff' }, label: { color: '#b3b3b3' } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                value={profileData.email}
                onChange={handleInputChange}
                fullWidth
                sx={{ input: { color: '#ffffff' }, label: { color: '#b3b3b3' } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Contact Number"
                name="contactNumber"
                variant="outlined"
                value={profileData.contactNumber}
                onChange={handleInputChange}
                fullWidth
                sx={{ input: { color: '#ffffff' }, label: { color: '#b3b3b3' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <ActionButton variant="contained" onClick={handleSave}>
                Save Changes
              </ActionButton>
            </Grid>
          </Grid>
        ) : (
          <ProfileDetail>
            <Typography variant="h6">Name: {profileData.name}</Typography>
            <Typography variant="h6">Email: {profileData.email}</Typography>
            <Typography variant="h6">Contact Number: {profileData.contactNumber}</Typography>
            <ActionButton variant="contained" onClick={() => setEditMode(true)}>
              Edit Profile
            </ActionButton>
          </ProfileDetail>
        )}
      </ProfileSection>

      <Divider sx={{ backgroundColor: '#444', marginY: '1.5rem' }} />

      <Typography variant="h5" sx={{ color: '#00a8ff', mb: 2, fontWeight: 'bold' }}>
        Order History
      </Typography>
      {profileData.orders.map((order) => (
        <ProfileCard key={order.id}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Model: {order.model}</Typography>
          <Typography variant="body2">Date: {order.date}</Typography>
          <Typography variant="body2">Status: {order.status}</Typography>
          <Typography variant="body2">Price: ₹{order.price}</Typography>
          <Typography variant="body2" sx={{ mt: 1, mb: 2, fontWeight: 'bold' }}>
            Scooty Lifecycle
          </Typography>
          <Stepper activeStep={order.lifecycleStage} alternativeLabel>
            {lifecycleStages.map((stage, index) => (
              <Step key={index}>
                <StepLabel sx={{ color: '#ffffff' }}>{stage}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </ProfileCard>
      ))}

      <LogoutButton variant="contained" onClick={handleLogout}>
        Logout
      </LogoutButton>
    </Container>
  );
}

export default Profile;
