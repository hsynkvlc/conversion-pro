import React, { useState } from 'react';
import { Save, PlayCircle } from 'lucide-react';

const GTMSettings: React.FC = () => {
  const [isServerSide, setIsServerSide] = useState(false);
  const [gtmServerUrl, setGtmServerUrl] = useState('');
  const [isTesting, setIsTesting] = useState(false);

  const handleTest = async () => {
    setIsTesting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsTesting(false);
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Google Tag Manager Configuration</h2>
          <p className="mt-1 text-sm text-gray-500">
            Configure your GTM settings and choose between client-side and server-side tracking
          </p>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Server-side Tracking</h3>
                <p className="text-sm text-gray-500">
                  Enable server-side tracking for improved accuracy and reliability
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsServerSide(!isServerSide)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isServerSide ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    isServerSide ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            
            {isServerSide && (
              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="server-url" className="block text-sm font-medium text-gray-700">
                    GTM Server Container URL
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="server-url"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="https://your-gtm-server.com"
                      value={gtmServerUrl}
                      onChange={(e) => setGtmServerUrl(e.target.value)}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Enter the URL of your GTM server container
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={handleTest}
                    disabled={!gtmServerUrl || isTesting}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    <PlayCircle className="h-4 w-4 mr-2" />
                    {isTesting ? 'Testing...' : 'Test Connection'}
                  </button>
                  
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-sm font-medium text-gray-900">Additional Settings</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="debug"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="debug" className="text-sm font-medium text-gray-700">
                    Enable Debug Mode
                  </label>
                  <p className="text-sm text-gray-500">
                    Show detailed debugging information in the console
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="consent"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="consent" className="text-sm font-medium text-gray-700">
                    Require Consent
                  </label>
                  <p className="text-sm text-gray-500">
                    Only track events after user consent is granted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GTMSettings;