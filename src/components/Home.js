import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="text-center">
        <h1 className="mb-4 fw-bold text-primary">🚨 E-Police Connect System</h1>
        <p className="lead mb-5">Welcome! Please choose your Option from below.</p>

        <div className="d-grid gap-3 col-12 col-md-6 mx-auto">
          <Link to="/civilian-login" className="btn btn-outline-primary btn-lg">👤 Civilian Login</Link>
          <Link to="/civilian-signup" className="btn btn-outline-success btn-lg">📝 Civilian Signup</Link>
          <Link to="/police-login" className="btn btn-outline-secondary btn-lg">👮 Police Login</Link>
        </div>
      </div>
    </div>
  );
}

