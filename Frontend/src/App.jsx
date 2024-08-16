import React from 'react';
import Landing from './Landing/Landing';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import ProfileSetup from './components/Profileupdate';

function App() {
  return (
    <Router> {/* Wrap the entire routing structure with Router */}
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profileUpdate" element={<ProfileSetup />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
