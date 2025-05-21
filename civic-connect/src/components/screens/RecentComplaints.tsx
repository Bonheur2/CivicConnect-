import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Menu, Transition } from '@headlessui/react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

interface Complaint {
  id: string;
  title: string;
  description: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  category: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

const statusColors = {
  Open: 'bg-yellow-100 text-yellow-800',
  'In Progress': 'bg-blue-100 text-blue-800',
  Resolved: 'bg-green-100 text-green-800',
  Closed: 'bg-gray-100 text-gray-800',
};

export default function RecentComplaints() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'date' | 'status'>('date');
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchComplaints = async () => {
      try {
        setIsLoading(true);
        // Simulated API call
        const mockComplaints: Complaint[] = [
          {
            id: '1',
            title: 'Pothole on Main Street',
            description: 'Large pothole causing traffic issues',
            status: 'Open',
            category: 'Infrastructure',
            location: '123 Main St',
            createdAt: new Date('2024-03-15'),
            updatedAt: new Date('2024-03-15'),
          },
          // Add more mock data as needed
          {
            id: '2',
            title: 'Street Light Out',
            description: 'Dark street light near park',
            status: 'In Progress',
            category: 'Electricity',
            location: '456 Oak Ave',
            createdAt: new Date('2024-03-14'),
            updatedAt: new Date('2024-03-16'),
          },
        ];
        setComplaints(mockComplaints);
      } catch (error) {
        console.error('Error fetching complaints:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  const filteredComplaints = complaints
    .filter((complaint) => {
      const matchesSearch = complaint.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        complaint.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'All' || complaint.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return b.createdAt.getTime() - a.createdAt.getTime();
      }
      return a.status.localeCompare(b.status);
    });

  // Placeholder functions for edit and delete actions
  const handleEdit = (complaintId: string) => {
    console.log('Edit complaint with ID:', complaintId);
    navigate(`/dashboard/edit-complaint`);
    // TODO: Implement navigation to edit page
  };

  const handleDelete = (complaintId: string) => {
    console.log('Delete complaint with ID:', complaintId);
    // TODO: Implement delete API call and update state
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Recent Complaints</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all complaints in the system, including their status, category, and location.
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-4">
        {/* Search Bar */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search complaints..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-10"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        {/* Filters */}
        <Menu as="div" className="relative">
          <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <FunnelIcon className="h-5 w-5 mr-2" />
            Filter
            <ChevronDownIcon className="h-5 w-5 ml-2" />
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {['All', 'Open', 'In Progress', 'Resolved', 'Closed'].map((status) => (
                  <Menu.Item key={status}>
                    {({ active }) => (
                      <button
                        onClick={() => setStatusFilter(status)}
                        className={`${
                          active ? 'bg-gray-100' : ''
                        } block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                      >
                        {status}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Sort */}
        <Menu as="div" className="relative">
          <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Sort by
            <ChevronDownIcon className="h-5 w-5 ml-2" />
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-75"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setSortBy('date')}
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                    >
                      Date
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setSortBy('status')}
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700 w-full text-left`}
                    >
                      Status
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      {/* Complaints List */}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Title</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Category</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Location</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredComplaints.map((complaint) => (
                    <tr key={complaint.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {complaint.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{complaint.category}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{complaint.location}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[complaint.status]}`}>
                          {complaint.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {format(complaint.createdAt, 'MMM d, yyyy')}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <button
                          onClick={() => handleEdit(complaint.id)}
                          className="text-indigo-600 hover:text-indigo-900 mr-4"
                        >
                          Edit<span className="sr-only">, {complaint.title}</span>
                        </button>
                        <button
                          onClick={() => handleDelete(complaint.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete<span className="sr-only">, {complaint.title}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 