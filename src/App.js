import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CivilianLogin from './components/CivilianLogin';
import CivilianSignup from './components/CivilianSignup';
import FileComplaint from './components/FileComplaint';
import PoliceLogin from './components/PoliceLogin';
import PoliceDashboard from './components/PoliceDashboard';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/civilian-login" element={<CivilianLogin />} />
        <Route path="/civilian-signup" element={<CivilianSignup />} />
        <Route path="/file-complaint" element={<FileComplaint />} />
        <Route path="/police-login" element={<PoliceLogin />} />
        <Route path="/police-dashboard" element={<PoliceDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
