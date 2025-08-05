import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PrisonRecordsPage = () => {
  const [prisons, setPrisons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('https://localhost:44388/api/PrisonRecords', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        setPrisons(res.data);
      })
      .catch(() => setError('❌ Failed to load prison records.'));
  }, []);

  const filteredPrisons = prisons.filter(p =>
    !searchTerm || (p.criminalName && p.criminalName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">🏛️ Prison Records</h2>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Search by prisoner name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {filteredPrisons.length === 0 ? (
        <p>No matching prison records found.</p>
      ) : (
        <div className="list-group">
          {filteredPrisons.map(p => (
            <div key={p.prisonId} className="list-group-item shadow-sm rounded mb-2">
              <p className="mb-1"><strong>👤 Criminal Name:</strong> {p.criminalName || 'N/A'}</p>
              <p className="mb-1"><strong>🏢 Prison Name:</strong> {p.prisonName}</p>
              <p className="mb-1"><strong>⛓️ Sentence:</strong> {p.sentenceYears} years</p>
              <p className="mb-0"><strong>📅 Release Date:</strong> {p.releaseDate}</p>
            </div>
          ))}
        </div>
      )}

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-success px-4" onClick={() => alert('Saved ✅')}>Save</button>
        <button className="btn btn-secondary px-4" onClick={() => navigate('/police-dashboard')}>⬅ Back</button>
      </div>
    </div>
  );
};

export default PrisonRecordsPage;
