import React from 'react';
import { ExternalLink, BarChart2, AlertCircle } from 'lucide-react';
import Card from '../common/Card';
import StatusIndicator from '../common/StatusIndicator';
import TrendIndicator from '../common/TrendIndicator';
import { Platform } from '../../types';
import PlatformIcon from './PlatformIcon';

interface PlatformCardProps {
  platform: Platform;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform }) => {
  // Format the last sync time to a readable format
  const formatLastSync = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const getSuccessRate = () => {
    if (platform.events.total === 0) return 0;
    return (platform.events.successful / platform.events.total) * 100;
  };

  return (
    <Card className="h-full transition-all duration-200 hover:shadow-md">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <PlatformIcon platform={platform.name} />
          <div className="ml-3">
            <h3 className="font-medium text-gray-800">{platform.name}</h3>
            <StatusIndicator status={platform.status} />
          </div>
        </div>
        <div className="flex space-x-2">
          {platform.status === 'issue' && (
            <button className="p-1.5 text-red-600 bg-red-50 rounded-full hover:bg-red-100 transition-colors">
              <AlertCircle size={16} />
            </button>
          )}
          <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
            <ExternalLink size={16} />
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-gray-500">Conversion Rate</span>
            {platform.previousRate && (
              <TrendIndicator 
                current={platform.conversionRate} 
                previous={platform.previousRate} 
                percentage 
              />
            )}
          </div>
          <div className="flex items-end">
            <span className="text-2xl font-semibold text-gray-800">
              {platform.conversionRate}%
            </span>
          </div>
        </div>

        <div>
          <span className="text-sm text-gray-500 block mb-1">Event Success Rate</span>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${getSuccessRate()}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">
              {platform.events.successful} successful
            </span>
            <span className="text-xs text-gray-500">
              {platform.events.failed} failed
            </span>
          </div>
        </div>

        <div className="pt-2 text-xs text-gray-500 border-t border-gray-100">
          Last synced: {formatLastSync(platform.lastSync)}
        </div>
      </div>
    </Card>
  );
};

export default PlatformCard;