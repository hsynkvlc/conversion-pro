import React, { useState } from 'react';
import { Check, ChevronRight, AlertCircle } from 'lucide-react';

interface Step {
  id: number;
  name: string;
  status: 'upcoming' | 'current' | 'complete';
}

const SetupWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [ga4Id, setGa4Id] = useState('');
  const [eventMappings, setEventMappings] = useState({
    purchase: true,
    add_to_cart: true,
    view_item: true,
    begin_checkout: true
  });

  const steps: Step[] = [
    {
      id: 1,
      name: 'GA4 Configuration',
      status: currentStep === 1 ? 'current' : currentStep > 1 ? 'complete' : 'upcoming'
    },
    {
      id: 2,
      name: 'Event Mapping',
      status: currentStep === 2 ? 'current' : currentStep > 2 ? 'complete' : 'upcoming'
    },
    {
      id: 3,
      name: 'Review & Confirm',
      status: currentStep === 3 ? 'current' : 'upcoming'
    }
  ];

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="ga4-id" className="block text-sm font-medium text-gray-700">
                GA4 Measurement ID
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="ga4-id"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg p-4"
                  placeholder="G-XXXXXXXXXX"
                  value={ga4Id}
                  onChange={(e) => setGa4Id(e.target.value)}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Enter your GA4 Measurement ID. You can find this in your Google Analytics account under Admin → Data Streams.
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 divide-y">
              {Object.entries(eventMappings).map(([event, enabled]) => (
                <div key={event} className="p-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      {event.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </h4>
                    <p className="text-sm text-gray-500">Map Shopify {event} event to GA4</p>
                  </div>
                  <button
                    type="button"
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      enabled ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                    onClick={() => setEventMappings(prev => ({ ...prev, [event]: !prev[event] }))}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        enabled ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Configuration Summary</h4>
              <dl className="divide-y divide-gray-200">
                <div className="py-4 flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">GA4 Measurement ID</dt>
                  <dd className="text-sm text-gray-900">{ga4Id}</dd>
                </div>
                <div className="py-4">
                  <dt className="text-sm font-medium text-gray-500 mb-2">Mapped Events</dt>
                  <dd className="space-y-1">
                    {Object.entries(eventMappings).map(([event, enabled]) => (
                      <div key={event} className="flex items-center">
                        {enabled ? (
                          <Check size={16} className="text-green-500 mr-2" />
                        ) : (
                          <AlertCircle size={16} className="text-gray-400 mr-2" />
                        )}
                        <span className="text-sm text-gray-900">
                          {event.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </span>
                      </div>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav aria-label="Progress">
        <ol role="list" className="flex items-center">
          {steps.map((step, stepIdx) => (
            <li key={step.id} className={`relative ${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
              {step.status === 'complete' ? (
                <div className="group">
                  <span className="flex items-center">
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 group-hover:bg-blue-800">
                      <Check className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                  </span>
                  {stepIdx !== steps.length - 1 && (
                    <span className="absolute left-4 top-4 -ml-px h-0.5 w-20 bg-blue-600" aria-hidden="true" />
                  )}
                </div>
              ) : step.status === 'current' ? (
                <div className="group" aria-current="step">
                  <span className="flex items-center">
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                    </span>
                    <span className="ml-4 text-sm font-medium text-blue-600">{step.name}</span>
                  </span>
                  {stepIdx !== steps.length - 1 && (
                    <span className="absolute left-4 top-4 -ml-px h-0.5 w-20 bg-gray-300" aria-hidden="true" />
                  )}
                </div>
              ) : (
                <div className="group">
                  <span className="flex items-center">
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300">
                      <span className="h-2.5 w-2.5 rounded-full bg-transparent" />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-500">{step.name}</span>
                  </span>
                  {stepIdx !== steps.length - 1 && (
                    <span className="absolute left-4 top-4 -ml-px h-0.5 w-20 bg-gray-300" aria-hidden="true" />
                  )}
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-8 bg-white rounded-lg border border-gray-200 p-8">
        {renderStep()}
        
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {currentStep === steps.length ? 'Complete Setup' : 'Continue'}
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupWizard;