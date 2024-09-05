// src/pages/AdminDashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InventoryManagement from '../components/InventoryManagement';
import ScooterTracking from '../components/ScooterTracking';
import Reports from '../components/Reports';

function AdminDashboard() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h2>Welcome to Admin Dashboard</h2>} />
        <Route path="inventory" element={<InventoryManagement />} />
        <Route path="tracking" element={<ScooterTracking />} />
        <Route path="reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default AdminDashboard;
