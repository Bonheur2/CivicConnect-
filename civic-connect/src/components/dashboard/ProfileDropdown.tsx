import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

interface ProfileDropdownProps {
  onLogout: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <Menu as="div" className="relative ml-3 flex items-center">
      <Menu.Button className="flex items-center space-x-3 rounded-lg bg-white p-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
        <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
          <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div className="hidden md:flex md:items-center">
          <span className="text-sm font-medium text-gray-700">Admin User</span>
          <svg className="ml-2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 top-full mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-4 py-3">
            <p className="text-sm text-gray-500">Signed in as</p>
          </div>                                
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => navigate('/dashboard/profile')}
                  className={`${active ? 'bg-gray-50' : ''} flex items-center px-4 py-2 text-sm text-gray-700 w-full text-left`}
                >
                  <svg className="mr-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Your Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => navigate('/dashboard/complaints')}
                  className={`${active ? 'bg-gray-50' : ''} flex items-center px-4 py-2 text-sm text-gray-700 w-full text-left`}
                >
                  <svg className="mr-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  My Complaints
                </button>
              )}
            </Menu.Item>
          </div>

          <div className="py-1">
             <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => navigate('/dashboard/add-complaint')}
                  className={`${active ? 'bg-gray-50' : ''} flex items-center px-4 py-2 text-sm text-gray-700 w-full text-left`}
                >
              {/* Complaint Form Icon */}
              <svg className="h-5 w-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 3h3m-6 0h.01M9 19h.01" />
              </svg>
              Add Complaint
                </button>
              )}
            </Menu.Item>
             <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => navigate('/dashboard/add-response')}
                  className={`${active ? 'bg-gray-50' : ''} flex items-center px-4 py-2 text-sm text-gray-700 w-full text-left`}
                >
                   {/* Responses Icon */}
              <svg className="h-5 w-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-.55.55a1 1 0 00-.27.68V19l-2 2v-3.17c-.02-.02-.04-.04-.07-.05L9 16z" />
              </svg>
                  Add Response
                </button>
              )}
            </Menu.Item>
          </div>

          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => navigate('/dashboard/settings')}
                  className={`${active ? 'bg-gray-50' : ''} flex items-center px-4 py-2 text-sm text-gray-700 w-full text-left`}
                >
                  <svg className="mr-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => navigate('/dashboard/help')}
                  className={`${active ? 'bg-gray-50' : ''} flex items-center px-4 py-2 text-sm text-gray-700 w-full text-left`}
                >
                  <svg className="mr-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Help Center
                </button>
              )}
            </Menu.Item>
          </div>

          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onLogout}
                  className={`${active ? 'bg-gray-50' : ''} flex w-full items-center px-4 py-2 text-sm text-gray-700`}
                >
                  <svg className="mr-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileDropdown; 