import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CivilianLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://localhost:44388/api/auth/login-civilian', {
        email,
        password
      });

      const { token, fullName, civilianId } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('civilianName', fullName);
      localStorage.setItem('civilianId', civilianId);

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      alert('Civilian login successful!');
      window.location.href = '/file-complaint';
    } catch (err) {
      alert('Login failed. Check your credentials.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow mx-auto" style={{ maxWidth: '450px' }}>
        <div className="card-body">
          <h3 className="text-center mb-4">Civilian Login</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
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

export default CivilianLogin;
