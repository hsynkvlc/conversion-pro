export interface Platform {
  id: string;
  name: string;
  icon: string;
  status: 'connected' | 'disconnected' | 'issue';
  lastSync: string;
  conversionRate: number;
  previousRate?: number;
  events: {
    total: number;
    successful: number;
    failed: number;
  };
}

export interface Alert {
  id: string;
  platform: string;
  message: string;
  type: 'error' | 'warning' | 'info';
  timestamp: string;
  resolved: boolean;
}

export interface ConversionData {
  date: string;
  value: number;
}

export interface EventLog {
  id: string;
  platform: string;
  eventName: string;
  status: 'success' | 'error';
  timestamp: string;
  details?: string;
}