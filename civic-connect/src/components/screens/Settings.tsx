import React, { useState } from 'react';

interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
}

interface PrivacySettings {
  profileVisibility: 'public' | 'private';
  showEmail: boolean;
  showPhone: boolean;
}

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationSettings>({
    email: true,
    push: true,
    sms: false,
  });

  const [privacy, setPrivacy] = useState<PrivacySettings>({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to save settings
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Notification Settings */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Notification Settings</h3>
              <p className="mt-1 text-sm text-gray-500">
                Manage how you receive notifications and updates.
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="email"
                      name="email"
                      type="checkbox"
                      checked={notifications.email}
                      onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
                      className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="email" className="font-medium text-gray-700">Email Notifications</label>
                    <p className="text-gray-500 text-sm">Receive updates about your complaints via email.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="push"
                      name="push"
                      type="checkbox"
                      checked={notifications.push}
                      onChange={(e) => setNotifications({ ...notifications, push: e.target.checked })}
                      className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="push" className="font-medium text-gray-700">Push Notifications</label>
                    <p className="text-gray-500 text-sm">Get instant updates on your device.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="sms"
                      name="sms"
                      type="checkbox"
                      checked={notifications.sms}
                      onChange={(e) => setNotifications({ ...notifications, sms: e.target.checked })}
                      className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="sms" className="font-medium text-gray-700">SMS Notifications</label>
                    <p className="text-gray-500 text-sm">Receive text messages for important updates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Privacy Settings</h3>
              <p className="mt-1 text-sm text-gray-500">
                Control what information is visible to others.
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-base font-medium text-gray-700">Profile Visibility</label>
                  <p className="text-sm text-gray-500">Choose who can see your profile information.</p>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        id="public"
                        name="visibility"
                        type="radio"
                        checked={privacy.profileVisibility === 'public'}
                        onChange={() => setPrivacy({ ...privacy, profileVisibility: 'public' })}
                        className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
                      />
                      <label htmlFor="public" className="ml-3 block text-sm font-medium text-gray-700">
                        Public
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="private"
                        name="visibility"
                        type="radio"
                        checked={privacy.profileVisibility === 'private'}
                        onChange={() => setPrivacy({ ...privacy, profileVisibility: 'private' })}
                        className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
                      />
                      <label htmlFor="private" className="ml-3 block text-sm font-medium text-gray-700">
                        Private
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="showEmail"
                      name="showEmail"
                      type="checkbox"
                      checked={privacy.showEmail}
                      onChange={(e) => setPrivacy({ ...privacy, showEmail: e.target.checked })}
                      className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="showEmail" className="font-medium text-gray-700">Show Email Address</label>
                    <p className="text-gray-500 text-sm">Make your email address visible to others.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="showPhone"
                      name="showPhone"
                      type="checkbox"
                      checked={privacy.showPhone}
                      onChange={(e) => setPrivacy({ ...privacy, showPhone: e.target.checked })}
                      className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="showPhone" className="font-medium text-gray-700">Show Phone Number</label>
                    <p className="text-gray-500 text-sm">Make your phone number visible to others.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 