import React from 'react';
import { Link } from 'react-router-dom';

const PoliceDashboard = () => {
  const officerName = localStorage.getItem('officerName');
  const rank = localStorage.getItem('rank');
  const isDesignated = localStorage.getItem('isDesignated') === 'true';

  return (
    <div className="container mt-5">
      <div className="bg-light p-4 rounded shadow">
        <h2 className="text-primary">👮 Welcome, Officer {officerName || 'Unknown'}</h2>
        <p><strong>Rank:</strong> {rank || 'N/A'}</p>
        <p><strong>Status:</strong> {isDesignated ? '✅ Designated' : '❌ Non-Designated'}</p>
      </div>

      <h3 className="mt-5 mb-3">📂 Dashboard Sections</h3>

      <div className="row g-3">
        <div className="col-md-6">
          <Link to="/complaints" className="text-decoration-none">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">📁 Complaints</h5>
                <p className="card-text">View and manage registered complaints.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6">
          <Link to="/criminal-records" className="text-decoration-none">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">🔎 Criminal Records</h5>
                <p className="card-text">Search and update criminal profiles.</p>
              </div>
            </div>
          </Link>
        </div>

        {isDesignated && (
          <>
            <div className="col-md-6">
              <Link to="/incident-reports" className="text-decoration-none">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">📋 Incident Reports</h5>
                    <p className="card-text">Review and file incident reports.</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-6">
              <Link to="/prison-records" className="text-decoration-none">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">🏛️ Prison Records</h5>
                    <p className="card-text">Maintain data of prison inmates and status.</p>
                  </div>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PoliceDashboard;
