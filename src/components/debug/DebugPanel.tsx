import React, { useState } from 'react';
import { ChevronDown, Circle, CheckCircle, XCircle, Download, Filter, Search } from 'lucide-react';

interface DebugEvent {
  id: string;
  timestamp: string;
  type: string;
  status: 'success' | 'error';
  details: string;
  platform: string;
}

const DebugPanel: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [expandedEvents, setExpandedEvents] = useState<string[]>([]);

  const mockEvents: DebugEvent[] = [
    {
      id: '1',
      timestamp: new Date().toISOString(),
      type: 'purchase',
      status: 'success',
      details: '{"transaction_id": "12345", "value": 99.99, "currency": "USD"}',
      platform: 'GA4'
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 5000).toISOString(),
      type: 'add_to_cart',
      status: 'error',
      details: 'Invalid parameter: product_id missing',
      platform: 'Google Ads'
    }
  ];

  const toggleEvent = (id: string) => {
    setExpandedEvents(prev =>
      prev.includes(id) ? prev.filter(eventId => eventId !== id) : [...prev, id]
    );
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'error':
        return <XCircle size={16} className="text-red-500" />;
      default:
        return <Circle size={16} className="text-gray-500" />;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 });
  };

  return (
    <div className="bg-gray-900 text-gray-100 h-screen flex flex-col">
      <div className="border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Event Debug Console</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search events..."
                className="bg-gray-800 text-gray-100 pl-9 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-gray-800 text-gray-100 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Events</option>
                <option value="success">Success</option>
                <option value="error">Error</option>
              </select>
            </div>
            <button className="flex items-center space-x-2 px-3 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
              <Download className="h-4 w-4" />
              <span className="text-sm">Export</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto font-mono text-sm">
        {mockEvents.map((event) => (
          <div
            key={event.id}
            className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
          >
            <div
              className="p-4 flex items-center cursor-pointer"
              onClick={() => toggleEvent(event.id)}
            >
              <ChevronDown
                className={`h-4 w-4 mr-2 transition-transform ${
                  expandedEvents.includes(event.id) ? 'rotate-180' : ''
                }`}
              />
              {getStatusIcon(event.status)}
              <span className="ml-2 text-gray-400">{formatTimestamp(event.timestamp)}</span>
              <span className={`ml-4 px-2 py-0.5 rounded text-xs ${
                event.status === 'success' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
              }`}>
                {event.status.toUpperCase()}
              </span>
              <span className="ml-4 text-blue-400">{event.platform}</span>
              <span className="ml-4">{event.type}</span>
            </div>
            {expandedEvents.includes(event.id) && (
              <div className="px-12 pb-4">
                <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto">
                  {event.details}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebugPanel;