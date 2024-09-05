// src/tests/ScooterTracking.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ScooterTracking from '../components/ScooterTracking';
import axios from 'axios';

jest.mock('axios');

describe('ScooterTracking', () => {
  test('renders scooter tracking data', async () => {
    const trackingData = [
      { id: 1, model: 'Scooter A', currentLocation: 'Yard', status: 'In Transit' },
      { id: 2, model: 'Scooter B', currentLocation: 'Store', status: 'Delivered' },
    ];
    
    axios.get.mockResolvedValue({ data: trackingData });
    
    render(<ScooterTracking />);
    
    const trackingItems = await screen.findAllByText(/Scooter/i);
    expect(trackingItems.length).toBe(2);
  });
});
