// src/components/dashboard/MetricCard.tsx
import React from 'react';
import { Card } from '../ui/Card';
import { cn } from '../../utils/cn';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  trend: 'up' | 'down' | 'neutral';
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'pink';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  icon,
  trend,
  color = 'blue'
}) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
    green: 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400',
    purple: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
    orange: 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400',
    pink: 'bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400'
  };

  const trendColors = {
    up: 'text-green-600 bg-green-50 dark:bg-green-900/20',
    down: 'text-red-600 bg-red-50 dark:bg-red-900/20',
    neutral: 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20'
  };

  const trendIcons = {
    up: '↑',
    down: '↓',
    neutral: '→'
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{title}</p>
          <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-white animate-number">
            {value}
          </p>
          <div className="flex items-center gap-1 mt-2">
            <span className={cn(
              'text-xs font-medium px-2 py-0.5 rounded-full inline-flex items-center gap-1 transition-all duration-300',
              trendColors[trend]
            )}>
              {trendIcons[trend]} {Math.abs(change)}%
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              vs mes anterior
            </span>
          </div>
        </div>
        <div className={cn(
          'p-3 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg',
          colorClasses[color]
        )}>
          {icon}
        </div>
      </div>
    </Card>
  );
};