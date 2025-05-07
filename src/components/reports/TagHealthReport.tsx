import React from 'react';
import { Line } from 'react-chartjs-2';
import { Download, HelpCircle } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface TagData {
  id: string;
  name: string;
  platform: string;
  successRate: number;
  total: number;
  successful: number;
  failed: number;
}

const TagHealthReport: React.FC = () => {
  const mockData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Success Rate',
        data: [98, 96, 99, 97, 95, 98, 99],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      }
    ]
  };

  const mockTags: TagData[] = [
    {
      id: '1',
      name: 'Purchase',
      platform: 'GA4',
      successRate: 98.5,
      total: 1000,
      successful: 985,
      failed: 15
    },
    {
      id: '2',
      name: 'Add to Cart',
      platform: 'Google Ads',
      successRate: 95.2,
      total: 800,
      successful: 762,
      failed: 38
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tag Health Report</h1>
          <p className="text-gray-600 mt-1">Monitor your tag performance and success rates</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Overall Success Rate</h3>
            <span className="text-2xl font-bold text-green-600">97.8%</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Last 7 days average</p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Total Events</h3>
            <span className="text-2xl font-bold text-gray-900">1,847</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Tracked in the last 7 days</p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Failed Events</h3>
            <span className="text-2xl font-bold text-red-600">53</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Requires attention</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900">Success Rate Trend</h3>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-500"
          >
            <HelpCircle className="h-5 w-5" />
          </button>
        </div>
        <div className="h-80">
          <Line
            data={mockData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: false,
                  min: 90,
                  max: 100,
                  ticks: {
                    callback: (value) => `${value}%`
                  }
                }
              },
              plugins: {
                legend: {
                  display: false
                }
              }
            }}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Tag Performance Details</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tag Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Platform
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Success Rate
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Events
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Failed
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockTags.map((tag) => (
                <tr key={tag.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {tag.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tag.platform}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className={`text-sm font-medium ${
                        tag.successRate >= 98 ? 'text-green-600' : 
                        tag.successRate >= 95 ? 'text-yellow-600' : 
                        'text-red-600'
                      }`}>
                        {tag.successRate}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {tag.total}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                    {tag.failed}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TagHealthReport;