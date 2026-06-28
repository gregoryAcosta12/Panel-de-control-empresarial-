import React from 'react';
import {

  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  ComposedChart
} from 'recharts';
import { Card } from '../ui/Card';
import type { RevenueData } from '../../types';

interface RevenueChartProps {
  data: RevenueData[];
}

export const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  // Detectar si estamos en modo oscuro
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  // Colores para modo oscuro/claro
  const colors = {
    grid: isDarkMode ? '#374151' : '#e5e7eb',
    axis: isDarkMode ? '#6B7280' : '#9CA3AF',
    tooltipBg: isDarkMode ? 'rgba(31, 41, 55, 0.95)' : 'rgba(255,255,255,0.95)',
    tooltipText: isDarkMode ? '#F9FAFB' : '#1F2937'
  };

  return (
    <Card title="Ingresos vs Gastos">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={colors.grid}
              vertical={false}
            />
            <XAxis 
              dataKey="month" 
              stroke={colors.axis}
              tick={{ fill: colors.axis }}
              tickLine={{ stroke: colors.axis }}
            />
            <YAxis 
              stroke={colors.axis}
              tick={{ fill: colors.axis }}
              tickLine={{ stroke: colors.axis }}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: colors.tooltipBg,
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                color: colors.tooltipText
              }}
              formatter={(value: any) => {
                if (value === undefined || value === null) return ['$0', ''];
                const numValue = typeof value === 'string' ? parseFloat(value) : value;
                return [`$${numValue.toLocaleString()}`, ''];
              }}
              labelStyle={{ color: colors.tooltipText }}
            />
            <Legend 
              wrapperStyle={{ 
                color: colors.tooltipText,
                paddingTop: '10px'
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3B82F6"
              strokeWidth={2}
              fill="url(#revenueGradient)"
              name="Ingresos"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#EF4444"
              strokeWidth={2}
              fill="url(#expensesGradient)"
              name="Gastos"
            />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#10B981"
              strokeWidth={3}
              name="Ganancias"
              dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};