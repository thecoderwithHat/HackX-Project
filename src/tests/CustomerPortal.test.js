// src/tests/CustomerPortal.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomerPortal from '../pages/CustomerPortal';
import axios from 'axios';

jest.mock('axios');

describe('CustomerPortal', () => {
  test('renders scooter listings', async () => {
    const scooters = [
      { id: 1, model: 'Scooter A', description: 'A great scooter' },
      { id: 2, model: 'Scooter B', description: 'An even better scooter' },
    ];
    
    axios.get.mockResolvedValue({ data: scooters });
    
    render(<CustomerPortal />);
    
    const scooterElements = await screen.findAllByText(/Scooter/);
    expect(scooterElements.length).toBe(2);
  });

  test('handles error when fetching scooters', async () => {
    axios.get.mockRejectedValue(new Error('Failed to fetch'));
    
    render(<CustomerPortal />);
    
    const errorMessage = await screen.findByText('Error fetching scooters:');
    expect(errorMessage).toBeInTheDocument();
  });
});
