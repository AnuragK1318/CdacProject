import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FileComplaint = () => {
  const [description, setDescription] = useState('');
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const civilianId = localStorage.getItem('civilianId');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!civilianId) {
      setError('Not authorized');
      return;
    }

    axios
      .get(`https://localhost:44388/api/Complaints/by-civilian/${civilianId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => setComplaints(res.data))
      .catch(() => setError('Failed to load complaints'));
  }, [civilianId, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description.trim()) {
      alert('Description is required');
      return;
    }

    try {
      await axios.post('https://localhost:44388/api/Complaints', {
        civilianId,
        description,
        dateFiled: new Date().toISOString().split('T')[0],
        status: 'open',
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert('Complaint filed successfully');
      setDescription('');

      const res = await axios.get(`https://localhost:44388/api/Complaints/by-civilian/${civilianId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setComplaints(res.data);
    } catch {
      setError('Failed to file complaint');
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/civilian-login');
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">📝 File a New Complaint</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="mb-5">
        <div className="mb-3">
          <label className="form-label">Complaint Description</label>
          <textarea
            className="form-control"
            placeholder="Describe your complaint..."
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit Complaint</button>
      </form>

      <h3 className="mb-3">📋 Your Complaints</h3>
      {complaints.length === 0 ? (
        <p className="text-muted">You haven't filed any complaints yet.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {complaints.map(c => (
            <div key={c.complaintId} className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title mb-2">📅 {new Date(c.dateFiled).toLocaleDateString()}</h5>
                  <p className="card-text"><strong>Status:</strong> <span className={`badge bg-${c.status === 'resolved' ? 'success' : 'warning'}`}>{c.status}</span></p>
                  <p className="card-text"><strong>Description:</strong> {c.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="d-flex justify-content-center gap-3 mt-5">
        <button className="btn btn-success" onClick={() => alert('Saved')}>Save</button>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>Back to Home</button>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default FileComplaint;
