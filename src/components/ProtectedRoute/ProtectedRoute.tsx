// components/ProtectedRoute.tsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../services/AppContext';

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('ProtectedRoute must be used within an AppProvider');
  }

  const { isAuthenticated } = context;

  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;