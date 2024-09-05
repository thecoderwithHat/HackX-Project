// src/pages/Admin.js
import React, { useState } from 'react';
import { Container, Typography, Card, Box, Grid, Button, Divider } from '@mui/material';
import { styled } from '@mui/system';

// Differentiated Mock Data
const initialUsers = [
  { id: 1, name: 'Rajesh Kumar', email: 'rajesh.kumar@example.com', role: 'User' },
  { id: 2, name: 'Anita Desai', email: 'anita.desai@example.com', role: 'Admin' },
  { id: 3, name: 'Arun Sharma', email: 'arun.sharma@example.com', role: 'User' },
  { id: 4, name: 'Neha Verma', email: 'neha.verma@example.com', role: 'User' },
];

const initialOrders = [
  { id: 1, model: 'Hero Electric Photon HX', date: '2024-08-15', status: 'Delivered', price: 89538 },
  { id: 2, model: 'Ola Electric S1 Pro', date: '2024-07-10', status: 'Shipped', price: 120678 },
  { id: 3, model: 'Ather 450X', date: '2024-06-25', status: 'Processing', price: 75580 },
  { id: 4, model: 'TVS iQube', date: '2024-05-30', status: 'Cancelled', price: 111671 },
];

const initialInventory = [
  { id: 1, model: 'Ather 450X', stock: 25, price: 75580 },
  { id: 2, model: 'Bajaj Chetak', stock: 15, price: 91679 },
  { id: 3, model: 'Ola Electric S1 Pro', stock: 10, price: 120678 },
  { id: 4, model: 'TVS iQube', stock: 8, price: 111671 },
  { id: 5, model: 'Hero Electric Photon HX', stock: 5, price: 89538 },
];

// Styled components using MUI
const AdminContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '2rem',
  backgroundColor: '#1e1e1e',
  borderRadius: '12px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
});

const SectionCard = styled(Card)({
  backgroundColor: '#2a2a2a',
  padding: '1.5rem',
  borderRadius: '12px',
  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
  color: '#ffffff',
});

const ActionButton = styled(Button)({
  backgroundColor: '#00a8ff',
  color: '#ffffff',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#0097e6',
  },
  margin: '0.5rem',
});

function Admin() {
  const [users, setUsers] = useState(initialUsers);
  const [orders, setOrders] = useState(initialOrders);
  const [inventory, setInventory] = useState(initialInventory);

  const handleUserEdit = (id) => {
    console.log(`Edit user with ID: ${id}`);
  };

  const handleUserDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleOrderUpdate = (id) => {
    console.log(`Update order with ID: ${id}`);
  };

  const handleInventoryUpdate = (id) => {
    console.log(`Update inventory for model with ID: ${id}`);
  };

  return (
    <AdminContainer maxWidth="lg">
      <Typography variant="h4" sx={{ color: '#00a8ff', fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
        Admin Dashboard
      </Typography>

      {/* User Management Section */}
      <SectionCard>
        <Typography variant="h5" sx={{ mb: 2, color: '#00a8ff' }}>User Management</Typography>
        {users.map((user) => (
          <Box key={user.id} sx={{ mb: 2 }}>
            <Typography variant="h6">Name: {user.name}</Typography>
            <Typography variant="body1">Email: {user.email}</Typography>
            <Typography variant="body1">Role: {user.role}</Typography>
            <Box>
              <ActionButton onClick={() => handleUserEdit(user.id)}>Edit</ActionButton>
              <ActionButton onClick={() => handleUserDelete(user.id)}>Delete</ActionButton>
            </Box>
            <Divider sx={{ backgroundColor: '#444', my: 1 }} />
          </Box>
        ))}
      </SectionCard>

      {/* Order Management Section */}
      <SectionCard>
        <Typography variant="h5" sx={{ mb: 2, color: '#00a8ff' }}>Order Management</Typography>
        {orders.map((order) => (
          <Box key={order.id} sx={{ mb: 2 }}>
            <Typography variant="h6">Model: {order.model}</Typography>
            <Typography variant="body1">Date: {order.date}</Typography>
            <Typography variant="body1">Status: {order.status}</Typography>
            <Typography variant="body1">Price: ₹{order.price}</Typography>
            <ActionButton onClick={() => handleOrderUpdate(order.id)}>Update Order</ActionButton>
            <Divider sx={{ backgroundColor: '#444', my: 1 }} />
          </Box>
        ))}
      </SectionCard>

      {/* Inventory Management Section */}
      <SectionCard>
        <Typography variant="h5" sx={{ mb: 2, color: '#00a8ff' }}>Inventory Management</Typography>
        {inventory.map((item) => (
          <Box key={item.id} sx={{ mb: 2 }}>
            <Typography variant="h6">Model: {item.model}</Typography>
            <Typography variant="body1">Stock: {item.stock}</Typography>
            <Typography variant="body1">Price: ₹{item.price}</Typography>
            <ActionButton onClick={() => handleInventoryUpdate(item.id)}>Update Inventory</ActionButton>
            <Divider sx={{ backgroundColor: '#444', my: 1 }} />
          </Box>
        ))}
      </SectionCard>

      {/* Analytics Section */}
      <SectionCard>
        <Typography variant="h5" sx={{ mb: 2, color: '#00a8ff' }}>Analytics Dashboard</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h3">{users.length}</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Total Orders</Typography>
            <Typography variant="h3">{orders.length}</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Total Inventory</Typography>
            <Typography variant="h3">
              {inventory.reduce((acc, item) => acc + item.stock, 0)}
            </Typography>
          </Grid>
        </Grid>
      </SectionCard>
    </AdminContainer>
  );
}

export default Admin;

