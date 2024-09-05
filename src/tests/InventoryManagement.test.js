// src/tests/InventoryManagement.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InventoryManagement from '../components/InventoryManagement';
import axios from 'axios';

jest.mock('axios');

describe('InventoryManagement', () => {
  test('renders inventory management page', () => {
    render(<InventoryManagement />);
    const heading = screen.getByText(/Inventory Management/i);
    expect(heading).toBeInTheDocument();
  });

  test('adds a new scooter', async () => {
    axios.post.mockResolvedValue({
      data: { id: 3, model: 'Scooter C', description: 'A brand new scooter', price: '1000' }
    });
    
    render(<InventoryManagement />);
    
    fireEvent.change(screen.getByLabelText(/Model/i), { target: { value: 'Scooter C' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'A brand new scooter' } });
    fireEvent.change(screen.getByLabelText(/Price/i), { target: { value: '1000' } });
    fireEvent.click(screen.getByText(/Add Scooter/i));
    
    const newScooter = await screen.findByText(/Scooter C/i);
    expect(newScooter).toBeInTheDocument();
  });
});
