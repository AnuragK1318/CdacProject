import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComplaintsPage = () => {
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState('');
  const isDesignated = localStorage.getItem('isDesignated') === 'true';

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('https://localhost:44388/api/Complaints', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setComplaints(res.data))
    .catch(() => setError('⚠️ Failed to load complaints'));
  }, []);

  const updateComplaintStatus = async (complaintId, newStatus) => {
    const token = localStorage.getItem('token');
    try {
      await axios.put(`https://localhost:44388/api/Complaints/${complaintId}/status`, `"${newStatus}"`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const res = await axios.get('https://localhost:44388/api/Complaints', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setComplaints(res.data);
    } catch {
      setError('⚠️ Failed to update complaint status');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📁 Complaints</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      {complaints.length === 0 ? (
        <div className="text-center text-muted">No complaints found.</div>
      ) : (
        <ul className="list-group">
          {complaints.map(c => (
            <li
              key={c.complaintId}
              className="list-group-item d-flex justify-content-between align-items-start flex-wrap"
            >
              <div className="flex-grow-1 me-3">
                <strong>{new Date(c.dateFiled).toLocaleDateString()}</strong> - {c.description}
                <span className="badge bg-info text-dark ms-2">{c.status}</span>
              </div>
              {isDesignated && (
                <div className="mt-2 mt-sm-0">
                  <select
                    className="form-select"
                    style={{ minWidth: '140px' }}
                    value={c.status}
                    onChange={(e) => updateComplaintStatus(c.complaintId, e.target.value)}
                  >
                    <option value="open">Open</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="btn btn-success" onClick={() => alert('Saved')}>
          Save
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => (window.location.href = '/police-dashboard')}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ComplaintsPage;
