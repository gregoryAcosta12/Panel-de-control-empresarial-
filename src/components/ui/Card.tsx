// src/components/ui/Card.tsx
import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  title, 
  subtitle,
  actions 
}) => {
  return (
    <div className={cn(
      'bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-300 hover:shadow-md',
      className
    )}>
      {(title || subtitle || actions) && (
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/50 dark:border-gray-700/50">
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            )}
            {subtitle && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{subtitle}</p>
            )}
          </div>
          {actions && (
            <div className="flex items-center gap-2">{actions}</div>
          )}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
};