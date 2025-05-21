import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import ProfileDropdown from './ProfileDropdown';
import { Link } from 'react-router-dom';

const pageTitles: { [key: string]: string } = {
  '/dashboard': 'Dashboard',
  '/dashboard/profile': 'Profile',
  '/dashboard/settings': 'Settings',
  '/dashboard/help': 'Help Center',
  '/dashboard/complaints': 'My Complaints',
  '/dashboard/submit-complaints': 'Submit Complaint',
};

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const title = pageTitles[location.pathname] || 'Dashboard';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo and Page Title */}
            <div className="flex items-center space-x-8">
            <Link to="/dashboard" className="flex items-center space-x-2">
                <img src="/images/civic-connect-logo.png" alt="CivicConnect Logo" className="h-10 w-10 object-contain" />
                <span className="text-2xl font-bold text-primary-600">CivicConnect</span>
              </Link>
              <div className="h-6 w-px bg-gray-200" />
              <h1 className="text-xl font-semibold text-gray-900">
                {title}
              </h1>
            </div>

            {/* Right: Profile Dropdown */}
            <div className="flex items-center relative z-50">
              <ProfileDropdown onLogout={handleLogout} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
