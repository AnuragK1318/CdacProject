import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { useNavigate } from 'react-router-dom';

const IncidentReportsPage = () => {
  const [incidents, setIncidents] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('https://localhost:44388/api/IncidentReports', {
      headers: { Authorization: `Bearer ${token}` }
    })
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

};

export default IncidentReportsPage;
