import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const PoliceDashboard = () => {
  const officerName = localStorage.getItem('officerName');
  const rank = localStorage.getItem('rank');
  const isDesignated = localStorage.getItem('isDesignated') === 'true';
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
      </div>
    </div>
  );
};

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

export default PoliceDashboard;
