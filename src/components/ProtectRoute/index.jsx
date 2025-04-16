import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const token = localStorage.getItem('authToken');


  if (!token) {
    return <Navigate to="/" replace />;
  }

  
  return <Outlet />;
}

export default ProtectedRoute;