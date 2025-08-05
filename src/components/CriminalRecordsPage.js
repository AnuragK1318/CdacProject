import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CriminalRecordsPage = () => {
  const [criminals, setCriminals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('https://localhost:44388/api/Criminals', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setCriminals(res.data))
      .catch(() => setError('⚠️ Failed to load criminal records'));
  }, []);

  const filteredCriminals = criminals.filter(c =>
    c.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🔎 Criminal Records</h2>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {error && <div className="alert alert-danger">{error}</div>}

      {filteredCriminals.length === 0 ? (
        <div className="text-center text-muted">No records found.</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {filteredCriminals.map(c => (
            <div key={c.criminalId} className="col">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{c.name}</h5>
                  <p className="card-text mb-1"><strong>Age:</strong> {c.age}</p>
                  <p className="card-text mb-1"><strong>Gender:</strong> {c.gender}</p>
                  <p className="card-text mb-1"><strong>Address:</strong> {c.address}</p>
                  <p className="card-text mb-1"><strong>Arrested:</strong> {new Date(c.arrestDate).toLocaleDateString()}</p>
                  <p className="card-text"><strong>Crime:</strong> {c.crimeCommitted}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="d-flex justify-content-center gap-3 mt-5">
        <button className="btn btn-success" onClick={() => alert('Saved')}>
          Save
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/police-dashboard')}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default CriminalRecordsPage;
