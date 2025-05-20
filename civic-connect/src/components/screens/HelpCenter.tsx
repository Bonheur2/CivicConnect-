import React, { useState } from 'react';
import { MagnifyingGlassIcon, ChevronDownIcon, EnvelopeIcon, PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { Disclosure } from '@headlessui/react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do I submit a new complaint?',
    answer: 'To submit a new complaint, click on the "New Complaint" button in the navigation bar. Fill out the required information including the location, category, and description of the issue. You can also attach photos if needed.',
    category: 'Complaints',
  },
  {
    question: 'How can I track the status of my complaint?',
    answer: 'You can track your complaint status by visiting the "Recent Complaints" page. Each complaint will show its current status, and you can click on individual complaints to see more details and updates.',
    category: 'Complaints',
  },
  {
    question: 'How do I update my profile information?',
    answer: 'To update your profile, go to the Profile page from the dropdown menu in the top right corner. Click the "Edit" button to modify your information, then click "Save" to confirm the changes.',
    category: 'Account',
  },
  {
    question: 'What are the different complaint statuses?',
    answer: 'Complaints can have four different statuses: "Open" (newly submitted), "In Progress" (being addressed), "Resolved" (issue fixed), and "Closed" (completed or no further action needed).',
    category: 'Complaints',
  },
  {
    question: 'How do I change my notification settings?',
    answer: 'Visit the Settings page from the dropdown menu. Under the "Notifications" section, you can customize your email, push, and SMS notification preferences.',
    category: 'Account',
  },
];

const categories = ['All', 'Complaints', 'Account', 'Privacy', 'Technical Support'];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Help Center</h1>
        <p className="mt-4 text-lg text-gray-500">
          How can we help you today?
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-10"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Contact Options */}
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400">
          <div className="flex-shrink-0">
            <EnvelopeIcon className="h-6 w-6 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <a href="mailto:support@civicconnect.com" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">Email Support</p>
              <p className="text-sm text-gray-500">Get help via email</p>
            </a>
          </div>
        </div>

        <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400">
          <div className="flex-shrink-0">
            <PhoneIcon className="h-6 w-6 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <a href="tel:+1234567890" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">Phone Support</p>
              <p className="text-sm text-gray-500">Call us directly</p>
            </a>
          </div>
        </div>

        <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400">
          <div className="flex-shrink-0">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <button className="focus:outline-none w-full text-left">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">Live Chat</p>
              <p className="text-sm text-gray-500">Chat with our support team</p>
            </button>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <Disclosure as="div" key={index} className="bg-white shadow rounded-lg">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50">
                    <span>{faq.question}</span>
                    <ChevronDownIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-2 pb-4 text-sm text-gray-500">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>

      {/* Still Need Help */}
      <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-lg font-medium text-gray-900">Still need help?</h2>
        <p className="mt-2 text-sm text-gray-500">
          Can't find what you're looking for? Please contact our support team for further assistance.
        </p>
        <div className="mt-6">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
} 