import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';

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
      .then(res => setPrisons(res.data))
      .catch(() => setError('❌ Failed to load prison records.'));
  }, []);

  const filteredPrisons = prisons.filter(p =>
    !searchTerm || (p.criminalName && p.criminalName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Search by prisoner name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
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
};

export default PrisonRecordsPage;
