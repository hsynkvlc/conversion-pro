import React from 'react';
import { ChevronUp, ChevronDown, Minus } from 'lucide-react';

interface TrendIndicatorProps {
  current: number;
  previous?: number;
  percentage?: boolean;
  invertColors?: boolean;
}

const TrendIndicator: React.FC<TrendIndicatorProps> = ({ 
  current, 
  previous, 
  percentage = false,
  invertColors = false
}) => {
  if (!previous) return null;
  
  const diff = current - previous;
  const percentChange = ((diff / previous) * 100).toFixed(1);
  
  let direction: 'up' | 'down' | 'flat' = 'flat';
  if (diff > 0) direction = 'up';
  else if (diff < 0) direction = 'down';
  
  // Default behavior (positive change is good)
  let colorClass = {
    up: 'text-green-600 bg-green-50',
    down: 'text-red-600 bg-red-50',
    flat: 'text-gray-600 bg-gray-50'
  };
  
  // Invert colors (positive change is bad)
  if (invertColors) {
    colorClass = {
      up: 'text-red-600 bg-red-50',
      down: 'text-green-600 bg-green-50',
      flat: 'text-gray-600 bg-gray-50'
    };
  }
  
  return (
    <div className={`inline-flex items-center px-2 py-0.5 rounded ${colorClass[direction]}`}>
      {direction === 'up' && <ChevronUp size={14} />}
      {direction === 'down' && <ChevronDown size={14} />}
      {direction === 'flat' && <Minus size={14} />}
      <span className="ml-1 text-xs font-medium">
        {direction !== 'flat' && (direction === 'up' ? '+' : '')}{percentage ? percentChange + '%' : diff.toFixed(1)}
      </span>
    </div>
  );
};

export default TrendIndicator;