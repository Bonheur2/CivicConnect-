import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface ComplaintFormData {
  title: string;
  category: string;
  description: string;
  location: string;
  contactEmail: string;
  contactPhone: string;
}

const categories = [
  'Roads and Infrastructure',
  'Public Safety',
  'Waste Management',
  'Water Supply',
  'Electricity',
  'Public Transportation',
  'Parks and Recreation',
  'Education',
  'Healthcare',
  'Other'
];

const EditComplaintForm: React.FC = () => {
  const { complaintId } = useParams<{ complaintId: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ComplaintFormData>({
    title: '',
    category: '',
    description: '',
    location: '',
    contactEmail: '',
    contactPhone: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // TODO: Implement actual API call to fetch complaint data by ID
    const fetchComplaint = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Simulated API call - Replace with your actual fetch logic
        const mockComplaintData: ComplaintFormData = {
          title: 'Existing Pothole Report',
          category: 'Roads and Infrastructure',
          description: 'This is a pre-filled description for editing.',
          location: '456 Elm St',
          contactEmail: 'test@example.com',
          contactPhone: '987-654-3210'
        };
        setFormData(mockComplaintData);
      } catch (err) {
        console.error('Error fetching complaint:', err);
        setError('Failed to fetch complaint data.');
      } finally {
        setIsLoading(false);
      }
    };

    if (complaintId) {
      fetchComplaint();
    }
     // Add complaintId to dependency array to refetch if ID changes
  }, [complaintId]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to update the complaint
    console.log('Updating complaint:', complaintId, formData);
    // After successful update, navigate back to the complaints list or dashboard
    // navigate('/dashboard/complaints');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-6 py-8 sm:p-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Edit Complaint (ID: {complaintId})</h3>
            <p className="mt-2 text-lg text-gray-600">
              Modify the details of this complaint.
            </p>
          </div>

          <form onSubmit={handleUpdate} className="space-y-8">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Brief description of the issue"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                id="category"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Please provide detailed information about the issue"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="Address or specific location of the issue"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  id="contactEmail"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="your.email@example.com"
                  value={formData.contactEmail}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  id="contactPhone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="(123) 456-7890"
                  value={formData.contactPhone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                >
                  Update Complaint
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditComplaintForm; 