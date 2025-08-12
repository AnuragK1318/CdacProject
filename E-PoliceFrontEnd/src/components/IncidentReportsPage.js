import React, { useEffect, useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import * as XLSX from 'xlsx';
import { useNavigate } from 'react-router-dom';
=======
>>>>>>> a33411ec90484a4de5429dc10c9d34c8c67fb2f9

const IncidentReportsPage = () => {
  const [incidents, setIncidents] = useState([]);
  const [error, setError] = useState('');
<<<<<<< HEAD
  const navigate = useNavigate();
=======
>>>>>>> a33411ec90484a4de5429dc10c9d34c8c67fb2f9

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('https://localhost:44388/api/IncidentReports', {
      headers: { Authorization: `Bearer ${token}` }
    })
<<<<<<< HEAD
      .then(res => setIncidents(res.data))
      .catch(() => setError('⚠️ Failed to load incident reports.'));
  }, []);

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(incidents);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Incident Reports");
    XLSX.writeFile(workbook, "IncidentReports.xlsx");
  };

 return (
  <div className="container my-5">
    <h2 className="mb-4">📋 Incident Reports</h2>

    {error && <div className="alert alert-danger">{error}</div>}

    {incidents.length === 0 && !error ? (
      <p>Loading incident reports...</p>
    ) : (
      <div className="table-responsive">
        <table className="table table-bordered table-hover shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>📍 Location</th>
              <th>📝 Description</th>
              <th>📅 Report Date</th>
              <th>⏰ Report Time</th>
            </tr>
          </thead>
          <tbody>
            {incidents.map((i) => (
              <tr key={i.reportId}>
                <td>{i.location}</td>
                <td>{i.description}</td>
                <td>{new Date(i.reportDate).toLocaleDateString()}</td>
                <td>{new Date(i.reportDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}

    <div className="mt-4 d-flex justify-content-end gap-2">
      <button
        className="btn btn-secondary"
        onClick={() => navigate('/police-dashboard')}
      >
        🔙 Back to Dashboard
      </button>

      <button
        className="btn btn-success"
        onClick={handleDownload}
      >
        📥 Download Excel
      </button>
    </div>
  </div>
);

=======
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
>>>>>>> a33411ec90484a4de5429dc10c9d34c8c67fb2f9
};

export default IncidentReportsPage;
