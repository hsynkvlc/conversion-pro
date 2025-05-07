import React from 'react';
import PlatformCard from '../components/dashboard/PlatformCard';
import TrackingSummary from '../components/dashboard/TrackingSummary';
import AlertsSection from '../components/dashboard/AlertsSection';
import EventLogs from '../components/dashboard/EventLogs';
import { platforms, weeklyConversions, alerts, eventLogs } from '../utils/mockData';
import { Plus } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Conversion Tracking Dashboard</h1>
          <p className="text-gray-600 mt-1">Monitor your conversions across connected platforms</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
            <Plus size={16} className="mr-2" />
            Connect Platform
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((platform) => (
          <PlatformCard key={platform.id} platform={platform} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TrackingSummary data={weeklyConversions} />
        </div>
        <div className="lg:col-span-1">
          <AlertsSection alerts={alerts} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <EventLogs logs={eventLogs} />
      </div>
    </div>
  );
};

export default Dashboard;