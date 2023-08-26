import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, isAuthenticated }) => {
  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

export default ProtectedRoute;