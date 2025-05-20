import React from 'react';

interface Complaint {
  id: string;
  title: string;
  status: string;
  date: string;
}

interface RecentComplaintsProps {
  complaints: Complaint[];
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending': return 'bg-yellow-100 text-yellow-800';
    case 'in-progress': return 'bg-blue-100 text-blue-800';
    case 'resolved': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const RecentComplaints: React.FC<RecentComplaintsProps> = ({ complaints }) => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Recent Complaints</h2>
        <button className="text-sm font-medium text-primary-600 hover:text-primary-500">
          View all
        </button>
      </div>
      <div className="mt-4 bg-white shadow rounded-lg">
        <ul className="divide-y divide-gray-200">
          {complaints.map((complaint) => (
            <li key={complaint.id} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{complaint.title}</p>
                  <p className="text-sm text-gray-500">Submitted on {complaint.date}</p>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(complaint.status)}`}>
                  {complaint.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentComplaints; 