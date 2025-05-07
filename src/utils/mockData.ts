import { Platform, Alert, ConversionData, EventLog } from '../types';

export const platforms: Platform[] = [
  {
    id: 'ga4',
    name: 'Google Analytics 4',
    icon: 'GA4',
    status: 'connected',
    lastSync: '2025-03-15T14:30:00Z',
    conversionRate: 2.8,
    previousRate: 2.4,
    events: {
      total: 7850,
      successful: 7845,
      failed: 5
    }
  },
  {
    id: 'gads',
    name: 'Google Ads',
    icon: 'GADS',
    status: 'issue',
    lastSync: '2025-03-15T10:15:00Z',
    conversionRate: 1.6,
    previousRate: 1.8,
    events: {
      total: 3420,
      successful: 3250,
      failed: 170
    }
  },
  {
    id: 'meta',
    name: 'Meta Ads',
    icon: 'META',
    status: 'connected',
    lastSync: '2025-03-15T15:45:00Z',
    conversionRate: 3.1,
    previousRate: 2.9,
    events: {
      total: 5430,
      successful: 5430,
      failed: 0
    }
  },
  {
    id: 'tiktok',
    name: 'TikTok Ads',
    icon: 'TIKTOK',
    status: 'disconnected',
    lastSync: '2025-03-10T09:20:00Z',
    conversionRate: 0,
    events: {
      total: 0,
      successful: 0,
      failed: 0
    }
  }
];

export const weeklyConversions: ConversionData[] = [
  { date: 'Mar 9', value: 156 },
  { date: 'Mar 10', value: 145 },
  { date: 'Mar 11', value: 198 },
  { date: 'Mar 12', value: 210 },
  { date: 'Mar 13', value: 187 },
  { date: 'Mar 14', value: 240 },
  { date: 'Mar 15', value: 223 },
];

export const alerts: Alert[] = [
  {
    id: 'alert1',
    platform: 'Google Ads',
    message: 'Purchase event tracking failure detected',
    type: 'error',
    timestamp: '2025-03-15T10:15:00Z',
    resolved: false
  },
  {
    id: 'alert2',
    platform: 'Google Analytics 4',
    message: 'AddToCart event missing for 3 conversions',
    type: 'warning',
    timestamp: '2025-03-15T08:30:00Z',
    resolved: false
  },
  {
    id: 'alert3',
    platform: 'Meta Ads',
    message: 'API rate limit approaching threshold',
    type: 'info',
    timestamp: '2025-03-14T23:45:00Z',
    resolved: true
  }
];

export const eventLogs: EventLog[] = [
  {
    id: 'ev1',
    platform: 'Google Analytics 4',
    eventName: 'purchase',
    status: 'success',
    timestamp: '2025-03-15T15:42:13Z'
  },
  {
    id: 'ev2',
    platform: 'Google Ads',
    eventName: 'purchase',
    status: 'error',
    timestamp: '2025-03-15T15:40:22Z',
    details: 'Invalid parameter: transaction_id'
  },
  {
    id: 'ev3',
    platform: 'Meta Ads',
    eventName: 'add_to_cart',
    status: 'success',
    timestamp: '2025-03-15T15:38:44Z'
  },
  {
    id: 'ev4',
    platform: 'Google Analytics 4',
    eventName: 'view_item',
    status: 'success',
    timestamp: '2025-03-15T15:35:17Z'
  },
  {
    id: 'ev5',
    platform: 'Google Ads',
    eventName: 'begin_checkout',
    status: 'success',
    timestamp: '2025-03-15T15:32:05Z'
  }
];

export const platformColors = {
  'Google Analytics 4': 'rgb(242, 170, 76)',
  'Google Ads': '#4285F4',
  'Meta Ads': '#1877F2',
  'TikTok Ads': '#000000'
};