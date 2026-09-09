import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Layout from './Layout';
import LoadingScreen from './LoadingScreen';

export default function ProtectedRoute() {
  const { user, initializing } = useAuth();

  if (initializing) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Layout />;
}
