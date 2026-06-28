import React from 'react';
import { MetricCard } from '../components/dashboard/MetricaCard';
import { RevenueChart } from '../components/dashboard/RevenueChart';
import { UserTable } from '../components/dashboard/UserTable';
import { mockMetrics, mockRevenueData, mockUsers } from '../data/mockData';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Bienvenido al panel de control</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Chart */}
      <RevenueChart data={mockRevenueData} />

      {/* User Table */}
      <UserTable users={mockUsers} />
    </div>
  );
};