import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children, requiredRole }) => {
  const token = localStorage.getItem('token');
  const isDesignated = localStorage.getItem('isDesignated') === 'true';

  // Not logged in?
  if (!token) {
    return <Navigate to="/police-login" />;
  }

  // Role-based restriction
<<<<<<< HEAD
  //a person trying to go in the designated section but is not designated
=======
>>>>>>> a33411ec90484a4de5429dc10c9d34c8c67fb2f9
  if (requiredRole === 'Designated' && !isDesignated) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default RequireAuth;
