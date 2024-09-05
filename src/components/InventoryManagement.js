// src/components/InventoryManagement.js
import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

function InventoryManagement() {
  const [scooters, setScooters] = useState([]);
  const [newScooter, setNewScooter] = useState({ model: '', description: '', price: '' });

  useEffect(() => {
    axios.get('/api/scooters')
      .then(response => setScooters(response.data))
      .catch(error => console.error('Error fetching scooters:', error));
  }, []);

  const handleAddScooter = () => {
    axios.post('/api/scooters', newScooter)
      .then(response => setScooters([...scooters, response.data]))
      .catch(error => console.error('Error adding scooter:', error));
  };

  const handleDeleteScooter = (id) => {
    axios.delete(`/api/scooters/${id}`)
      .then(() => setScooters(scooters.filter(scooter => scooter.id !== id)))
      .catch(error => console.error('Error deleting scooter:', error));
  };

  const handleInputChange = (e) => {
    setNewScooter({ ...newScooter, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <h2>Inventory Management</h2>
      <TextField name="model" label="Model" onChange={handleInputChange} />
      <TextField name="description" label="Description" onChange={handleInputChange} />
      <TextField name="price" label="Price" onChange={handleInputChange} />
      <Button onClick={handleAddScooter} variant="contained" color="primary">Add Scooter</Button>
      
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Model</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scooters.map((scooter) => (
              <TableRow key={scooter.id}>
                <TableCell>{scooter.model}</TableCell>
                <TableCell>{scooter.description}</TableCell>
                <TableCell>{scooter.price}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDeleteScooter(scooter.id)} color="secondary">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default InventoryManagement;
