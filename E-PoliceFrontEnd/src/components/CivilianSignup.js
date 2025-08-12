import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CivilianSignup() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:44388/api/Civilian/signup", form);
<<<<<<< HEAD
      alert("✅ Signup successful!");
      window.location.href = '/civilian-login';
=======
      alert("Signup successful!");
>>>>>>> a33411ec90484a4de5429dc10c9d34c8c67fb2f9
    } catch (error) {
      if (error.response && error.response.data) {
        alert("Error: " + error.response.data);
      } else {
<<<<<<< HEAD
        alert("❌Signup failed. Check console for details.");
=======
        alert("Signup failed. Check console for details.");
>>>>>>> a33411ec90484a4de5429dc10c9d34c8c67fb2f9
        console.error(error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto shadow" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <h3 className="text-center mb-4">Civilian Signup</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input name="name" className="form-control" placeholder="Full Name" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input name="email" type="email" className="form-control" placeholder="Email" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input name="phone" className="form-control" placeholder="Phone Number" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea name="address" className="form-control" placeholder="Address" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input name="password" type="password" className="form-control" placeholder="Password" onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-success w-100">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
