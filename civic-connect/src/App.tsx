import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Home';
import DashboardLayout from './components/dashboard/dashboardLayout';
import ComplaintForm from './components/ComplaintForm';
import ComplaintTracker from './components/ComplaintTracker';
import Login from './components/screens/Login';
import Register from './components/screens/Register';
import Dashboard from './components/dashboard/Dashboard';
import Settings from './components/screens/Settings';
import Profile from './components/screens/Profile';
import HelpCenter from './components/screens/HelpCenter';
import RecentComplaints from './components/screens/RecentComplaints';
import EditComplaintForm from './components/screens/EditComplaintForm';
// Protected Route wrapper component    
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};







const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<HelpCenter />} />
          <Route path="complaints" element={<RecentComplaints />} />
          <Route path="submit-complaints" element={<ComplaintForm />} />
          <Route path="add-complaint" element={<ComplaintForm />} />
          <Route path="add-response" element={<ComplaintForm />} />
          <Route path="edit-complaint" element={<EditComplaintForm />} />
        </Route>

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
