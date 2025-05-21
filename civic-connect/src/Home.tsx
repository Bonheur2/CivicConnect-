import React from 'react';
import { Link } from 'react-router-dom';


const Home: React.FC = () => (
    <div className="min-h-screen">
      {/* Hero Section with background and welcome message */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 py-32 min-h-screen overflow-hidden">
    {/* Background Image Layer */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
      style={{ backgroundImage: "url('/images/bg-image.jpeg')" }}
    />
  
    {/* Content Layer */}
    <div className="relative z-10 text-black">
      <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-md">
        Welcome to <span className="text-primary-600">CivicConnect</span>
      </h1>
      <p className="text-xl md:text-2xl max-w-3xl mt-6 drop-shadow-md text-black">
        Your platform for efficient citizen-government communication. Together, we can make our community better.
      </p>
    </div>
  </div>
  
  
      {/* Actions: Submit and Track Complaint */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16 px-4">
        {/* Submit Complaint Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 mb-4">
            <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Submit a Complaint
          </h2>
          <p className="text-gray-600 mb-6">
            Report issues with public services and infrastructure. Your voice matters in improving our community.
          </p>
          <Link
            to="/submit-complaint"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
          >
            Submit Now
            <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
  
        {/* Track Complaint Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 mb-4">
            <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Track Your Complaint
          </h2>
          <p className="text-gray-600 mb-6">
            Stay informed about your submitted complaints. Track their progress and get updates in real-time.
          </p>
          <Link
            to="/track-complaint"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
          >
            Track Now
            <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
  
      {/* Why Choose Us Section */}
      <div className="bg-primary-50 rounded-xl p-8 max-w-4xl mx-auto mt-16">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-primary-900">Why Choose CivicConnect?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="space-y-2">
              <div className="flex justify-center">
                <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-primary-900">Fast Response</h4>
              <p className="text-primary-700">Quick routing to the right department</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-primary-900">Secure Platform</h4>
              <p className="text-primary-700">Your data is always protected</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center">
                <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-primary-900">Real-time Updates</h4>
              <p className="text-primary-700">Track your complaint status</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  export default Home;