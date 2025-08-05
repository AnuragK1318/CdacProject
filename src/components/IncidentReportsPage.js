import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IncidentReportsPage = () => {
  const [incidents, setIncidents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('https://localhost:44388/api/IncidentReports', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setIncidents(res.data))
    .catch(() => setError('⚠️ Failed to load incident reports'));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">📋 Incident Reports</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      {incidents.length === 0 ? (
        <p>No incident reports found.</p>
      ) : (
        <div className="list-group">
          {incidents.map(i => (
            <div key={i.reportId} className="list-group-item list-group-item-action mb-2 shadow-sm">
              <div className="fw-bold">{i.location}</div>
              <div><strong>Description:</strong> {i.description}</div>
              <div><strong>Date:</strong> {i.reportDate}</div>
              <div><strong>Officer:</strong> {i.officerName || 'N/A'}</div>
            </div>
          ))}
        </div>
      )}

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-success" onClick={() => alert('Saved')}>✅ Save</button>
        <button className="btn btn-secondary" onClick={() => window.location.href = '/police-dashboard'}>🔙 Back to Dashboard</button>
      </div>
    </div>
  );
};

export default IncidentReportsPage;
