export const TABS = ['Summary', 'Chart', 'Statistics', 'Analysis', 'Settings'];

export const TIMEFRAMES = ['1d', '3d', '1w', '1m', '6m', '1y', 'max'];

export const TIMEFRAME_CONFIG = {
  '1d': { points: 24, label: '1 Day' },
  '3d': { points: 72, label: '3 Days' },
  '1w': { points: 168, label: '1 Week' },
  '1m': { points: 720, label: '1 Month' },
  '6m': { points: 4320, label: '6 Months' },
  '1y': { points: 8760, label: '1 Year' },
  max: { points: 8760, label: 'All Time' },
};

export const COLORS = {
  primary: '#3b82f6',
  success: '#10b981',
  danger: '#ef4444',
  warning: '#f59e0b',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
};
