import React from 'react';

interface StatusIndicatorProps {
  status: 'connected' | 'disconnected' | 'issue';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ 
  status, 
  showText = true,
  size = 'md'
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'connected':
        return 'bg-green-500';
      case 'disconnected':
        return 'bg-gray-400';
      case 'issue':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };
  
  const getStatusText = () => {
    switch (status) {
      case 'connected':
        return 'Connected';
      case 'disconnected':
        return 'Disconnected';
      case 'issue':
        return 'Connection Issue';
      default:
        return 'Unknown';
    }
  };

  const sizeClasses = {
    sm: 'h-2 w-2',
    md: 'h-3 w-3',
    lg: 'h-4 w-4'
  };

  return (
    <div className="flex items-center">
      <div className={`${sizeClasses[size]} ${getStatusColor()} rounded-full animate-pulse`}></div>
      {showText && (
        <span className="ml-2 text-sm text-gray-600">{getStatusText()}</span>
      )}
    </div>
  );
};

export default StatusIndicator;