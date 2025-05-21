import React, { useState } from 'react';

interface ComplaintStatus {
  id: string;
  title: string;
  status: 'pending' | 'in-progress' | 'resolved' | 'closed';
  lastUpdated: string;
  department: string;
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  resolved: 'bg-green-100 text-green-800',
  closed: 'bg-gray-100 text-gray-800',
};

const statusIcons = {
  pending: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'in-progress': (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  resolved: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  closed: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
};

const ComplaintTracker: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [complaint, setComplaint] = useState<ComplaintStatus | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!trackingId.trim()) {
      setError('Please enter a tracking ID');
      return;
    }

    setComplaint({
      id: trackingId,
      title: 'Pothole on Main Street',
      status: 'in-progress',
      lastUpdated: new Date().toLocaleDateString(),
      department: 'Roads and Infrastructure'
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-6 py-8 sm:p-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Track Your Complaint</h3>
            <p className="mt-2 text-lg text-gray-600">
              Enter your tracking ID to check the status of your complaint
            </p>
          </div>


          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="trackingId" className="block text-sm font-medium text-gray-700">
                Tracking ID
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  id="trackingId"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="Enter your tracking ID"
                  className="flex-1 block w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
                <button
                  type="submit"
                  className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Track
                </button>
              </div>
            </div>
          </form>

          {error && (
            <div className="mt-4 rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">{error}</p>
                </div>
              </div>
            </div>
          )}

          {complaint && (
            <div className="mt-8 border-t border-gray-200 pt-8">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Complaint ID</dt>
                  <dd className="mt-1 text-sm text-gray-900">{complaint.id}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="mt-1">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[complaint.status]}`}>
                      {statusIcons[complaint.status]}
                      <span className="ml-1.5">
                        {complaint.status.charAt(0).toUpperCase() + complaint.status.slice(1)}
                      </span>
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Title</dt>
                  <dd className="mt-1 text-sm text-gray-900">{complaint.title}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Department</dt>
                  <dd className="mt-1 text-sm text-gray-900">{complaint.department}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">Last Updated</dt>
                  <dd className="mt-1 text-sm text-gray-900">{complaint.lastUpdated}</dd>
                </div>
              </dl>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplaintTracker; 