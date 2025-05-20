import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatCard from './StatCard';
import ProfileDropdown from './ProfileDropdown';
import RecentComplaints from './RecentComplaints';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const recentComplaints = [
    { id: '1', title: 'Pothole on Main Street', status: 'in-progress', date: '2024-03-15' },
    { id: '2', title: 'Street Light Out', status: 'pending', date: '2024-03-14' },
    { id: '3', title: 'Garbage Collection Delay', status: 'resolved', date: '2024-03-13' },
    { id: '4', title: 'Park Maintenance Required', status: 'pending', date: '2024-03-12' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end h-16">
            <ProfileDropdown onLogout={handleLogout} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Complaints"
            value="156"
            icon={<svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>}
            trend={{ value: '12% vs last month', isPositive: true }}
          />
          <StatCard
            title="Resolved"
            value="89"
            icon={<svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>}
            trend={{ value: '8% vs last month', isPositive: true }}
          />
          <StatCard
            title="In Progress"
            value="45"
            icon={<svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>}
          />
          <StatCard
            title="Response Time"
            value="24h"
            icon={<svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>}
            trend={{ value: '10% vs last month', isPositive: false }}
          />
        </div>

        {/* Recent Complaints */}
        <RecentComplaints complaints={recentComplaints} />
      </main>
    </div>
  );
};

export default Dashboard; 