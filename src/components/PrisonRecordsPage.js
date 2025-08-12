import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import * as XLSX from 'xlsx';
=======
>>>>>>> a33411ec90484a4de5429dc10c9d34c8c67fb2f9

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
<<<<<<< HEAD
      .then(res => setPrisons(res.data))
=======
      .then(res => {
        setPrisons(res.data);
      })
>>>>>>> a33411ec90484a4de5429dc10c9d34c8c67fb2f9
      .catch(() => setError('❌ Failed to load prison records.'));
  }, []);

  const filteredPrisons = prisons.filter(p =>
    !searchTerm || (p.criminalName && p.criminalName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

<<<<<<< HEAD
  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredPrisons);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Prison Records");
    XLSX.writeFile(workbook, "PrisonRecords.xlsx");
  };

  return (
  <div className="container my-4">
    <h2 className="text-center mb-4">🏛️ Prison Records</h2>

    <div className="row mb-3">
      <div className="col-md-8">
=======
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">🏛️ Prison Records</h2>

      <div className="mb-4">
>>>>>>> a33411ec90484a4de5429dc10c9d34c8c67fb2f9
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Search by prisoner name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
<<<<<<< HEAD
    </div>

    {error && <div className="alert alert-danger">{error}</div>}

    {filteredPrisons.length === 0 ? (
      <p>No matching prison records found.</p>
    ) : (
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>👤 Criminal Name</th>
              <th>🏢 Prison Name</th>
              <th>⛓️ Sentence (Years)</th>
              <th>📅 Release Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredPrisons.map(p => (
              <tr key={p.prisonId}>
                <td>{p.criminalName || 'N/A'}</td>
                <td>{p.prisonName}</td>
                <td>{p.sentenceYears}</td>
                <td>{p.releaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}

    {/* Button row */}
    <div className="mt-4 d-flex justify-content-end gap-2">
      <button
        className="btn btn-secondary"
        onClick={() => navigate('/police-dashboard')}
      >
        ⬅ Back
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
>>>>>>> a33411ec90484a4de5429dc10c9d34c8c67fb2f9
};

export default PrisonRecordsPage;
