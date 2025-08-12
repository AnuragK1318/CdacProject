import React from 'react';
<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

=======
import { Link } from 'react-router-dom';
>>>>>>> a33411ec90484a4de5429dc10c9d34c8c67fb2f9

const PoliceDashboard = () => {
  const officerName = localStorage.getItem('officerName');
  const rank = localStorage.getItem('rank');
  const isDesignated = localStorage.getItem('isDesignated') === 'true';
<<<<<<< HEAD
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/police-login');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
       <div className="alert alert-primary shadow-sm p-4 rounded">
  <h4 className="mb-2">
    👮‍♂️ Welcome, Officer <span className="text-dark">{officerName || 'Unknown'}</span>
  </h4>
  <p className="mb-0">
    <strong>🎖️ Rank:</strong> {rank || 'N/A'}
  </p>
   <p style={styles.subText}>
        <strong>Status:</strong><strong> {isDesignated ? '✅ Designated' : '❌ Non-Designated'}</strong>
    </p>
</div>

        <hr style={styles.divider} />

        <h3 style={styles.sectionTitle}>📂 Dashboard Sections</h3>
        <ul style={styles.linkList}>
          <li><Link style={styles.link} to="/complaints">📁 Complaints</Link></li>
          <li><Link style={styles.link} to="/criminal-records">🔎 Criminal Records</Link></li>
          {isDesignated && (
            <>
              <li><Link style={styles.link} to="/incident-reports">📋 Incident Reports</Link></li>
              <li><Link style={styles.link} to="/prison-records">🏛️ Prison Records</Link></li>
            </>
          )}
        </ul>

        <button onClick={handleLogout} style={styles.logoutBtn}>
          🚪 Logout
        </button>
=======

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
>>>>>>> a33411ec90484a4de5429dc10c9d34c8c67fb2f9
      </div>
    </div>
  );
};

<<<<<<< HEAD
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f0f4f8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '500px',
    boxSizing: 'border-box',
  },
  header: {
    margin: 0,
    marginBottom: '10px',
    color: '#2c3e50',
  },
  subText: {
    margin: '6px 0',
    fontSize: '16px',
    color: '#555',
  },
  divider: {
    margin: '20px 0',
    borderColor: '#ccc',
  },
  sectionTitle: {
    marginBottom: '12px',
    color: '#34495e',
  },
  linkList: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '20px',
  },
  link: {
    display: 'block',
    padding: '10px 15px',
    marginBottom: '8px',
    backgroundColor: '#ecf0f1',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#2c3e50',
    fontWeight: '500',
    transition: 'background 0.3s',
  },
  logoutBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: 'crimson',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
  },
};

=======
>>>>>>> a33411ec90484a4de5429dc10c9d34c8c67fb2f9
export default PoliceDashboard;
