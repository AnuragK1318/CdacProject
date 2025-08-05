import React, { useState } from 'react';
import axios from 'axios';

const PoliceLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const res = await axios.post('https://localhost:44388/api/auth/login-officer', {
        email,
        password
      });

      const { token, name, officerId, rank, isDesignated } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('officerName', name);
      localStorage.setItem('officerId', officerId);
      localStorage.setItem('rank', rank);
      localStorage.setItem('isDesignated', isDesignated.toString());

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      alert('✅ Police login successful!');
      window.location.href = '/police-dashboard';
    } catch (err) {
      setErrorMsg('❌ Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="col-md-6">
        <div className="card shadow p-4">
          <h2 className="text-center text-primary mb-4">👮 Police Login</h2>

          {errorMsg && (
            <div className="alert alert-danger" role="alert">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PoliceLogin;
