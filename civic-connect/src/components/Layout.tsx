import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClass = (path: string) => `
    px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
    ${isActive(path)
      ? 'bg-primary-100 text-primary-700'
      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }
  `;

  const mobileNavLinkClass = (path: string) => `
    block px-3 py-2 rounded-md text-base font-medium
    ${isActive(path)
      ? 'bg-primary-100 text-primary-700'
      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }
  `;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            {/* Left: Logo and name */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/images/civic-connect-logo.png" alt="CivicConnect Logo" className="h-10 w-10 object-contain" />
                <span className="text-2xl font-bold text-primary-600">CivicConnect</span>
              </Link>
            </div>
            {/* Center: Navigation links */}
            <div className="hidden sm:flex flex-1 justify-center space-x-4">
              <Link to="/" className={navLinkClass('/')}>Home</Link>
              <Link to="/submit-complaint" className={navLinkClass('/submit-complaint')}>Submit Complaint</Link>
              <Link to="/track-complaint" className={navLinkClass('/track-complaint')}>Track Complaint</Link>
            </div>
            {/* Right: Login button and mobile menu */}
            <div className="flex items-center">
              <div className="hidden sm:flex sm:items-center">
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                >
                  Login
                </Link>
              </div>
              <div className="flex items-center sm:hidden ml-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={mobileNavLinkClass('/')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/submit-complaint"
              className={mobileNavLinkClass('/submit-complaint')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Submit Complaint
            </Link>
            <Link
              to="/track-complaint"
              className={mobileNavLinkClass('/track-complaint')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Track Complaint
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <Link
                  to="/login"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <Outlet />
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} CivicConnect. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 