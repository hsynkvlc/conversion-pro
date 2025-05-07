import React from 'react';
import Card from '../common/Card';
import { ConversionData } from '../../types';
import { ArrowRight } from 'lucide-react';

interface TrackingSummaryProps {
  data: ConversionData[];
}

const TrackingSummary: React.FC<TrackingSummaryProps> = ({ data }) => {
  // Calculate total conversions for the week
  const totalConversions = data.reduce((sum, item) => sum + item.value, 0);
  
  // Calculate percentage change from first to last day
  const percentChange = data.length >= 2 
    ? ((data[data.length - 1].value - data[0].value) / data[0].value) * 100
    : 0;
  
  // Find the max value to normalize the chart heights
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <Card 
      title="7-Day Tracking Summary" 
      subtitle="Conversion overview for the last week"
      action={
        <button className="flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium">
          <span>Detailed report</span>
          <ArrowRight size={16} className="ml-1" />
        </button>
      }
    >
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-800">{totalConversions}</p>
            <p className="text-sm text-gray-500">Total conversions</p>
          </div>
          <div className="mt-2 sm:mt-0">
            <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
              percentChange >= 0 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {percentChange >= 0 ? '+' : ''}{percentChange.toFixed(1)}%
            </div>
            <p className="text-xs text-gray-500 mt-1">vs. previous period</p>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex items-end justify-between h-32 pt-4">
            {data.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center flex-1"
              >
                <div 
                  className="w-full max-w-[30px] bg-blue-100 rounded-t-md transition-all duration-300 hover:bg-blue-200"
                  style={{ 
                    height: `${(item.value / maxValue) * 100}%`,
                    minHeight: '4px' 
                  }}
                >
                  <div 
                    className="w-full h-1/3 bg-blue-500 rounded-t-md"
                    style={{ minHeight: '2px' }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600 mt-1 font-medium">{item.date}</p>
              </div>
            ))}
          </div>
          <div className="absolute left-0 right-0 top-0 h-[1px] bg-gray-100"></div>
          <div className="absolute left-0 right-0 top-1/4 h-[1px] bg-gray-100"></div>
          <div className="absolute left-0 right-0 top-2/4 h-[1px] bg-gray-100"></div>
          <div className="absolute left-0 right-0 top-3/4 h-[1px] bg-gray-100"></div>
        </div>
      </div>
    </Card>
  );
};

export default TrackingSummary;