import React from 'react';
import { AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import Card from '../common/Card';
import { Alert } from '../../types';

interface AlertsSectionProps {
  alerts: Alert[];
}

const AlertsSection: React.FC<AlertsSectionProps> = ({ alerts }) => {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <AlertTriangle size={16} className="text-red-500" />;
      case 'warning':
        return <AlertTriangle size={16} className="text-amber-500" />;
      case 'info':
        return <Info size={16} className="text-blue-500" />;
      default:
        return <Info size={16} className="text-gray-500" />;
    }
  };

  const getAlertClass = (type: string) => {
    switch (type) {
      case 'error':
        return 'bg-red-50 border-l-4 border-red-500';
      case 'warning':
        return 'bg-amber-50 border-l-4 border-amber-500';
      case 'info':
        return 'bg-blue-50 border-l-4 border-blue-500';
      default:
        return 'bg-gray-50 border-l-4 border-gray-500';
    }
  };
  
  // Format timestamp to a readable format
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Card 
      title="Alerts" 
      subtitle="Tracking issues that need attention"
      action={
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View all
        </button>
      }
    >
      <div className="space-y-3">
        {alerts.length === 0 ? (
          <div className="text-center py-6">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">All clear</h3>
            <p className="mt-1 text-sm text-gray-500">No tracking issues detected</p>
          </div>
        ) : (
          alerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`p-3 rounded-md ${getAlertClass(alert.type)} ${
                alert.resolved ? 'opacity-60' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    {getAlertIcon(alert.type)}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">
                      {alert.platform}
                    </p>
                    <p className="text-sm text-gray-600 mt-0.5">
                      {alert.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatTime(alert.timestamp)}
                    </p>
                  </div>
                </div>
                <button className="p-1 rounded-full hover:bg-gray-200 transition-colors">
                  <X size={16} className="text-gray-500" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};

export default AlertsSection;