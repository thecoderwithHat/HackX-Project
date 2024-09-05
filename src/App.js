import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import CustomerPortal from './pages/CustomerPortal';
import AdminDashboard from './pages/AdminDashboard';
import FranchiseeInterface from './pages/FranchiseeInterface';
import Recommendations from './pages/Recommendations';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scooters" element={<CustomerPortal />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/franchisee" element={<FranchiseeInterface />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
