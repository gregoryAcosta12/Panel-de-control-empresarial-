// src/pages/Analytics.tsx
import React from 'react';
import { Card } from '../components/ui/Card';
import { 
  FiTrendingUp, 
  FiUsers, 
  FiDollarSign, 
  FiActivity,
  FiBarChart2,
  FiPieChart
} from 'react-icons/fi';
import { MetricCard } from '../components/dashboard/MetricaCard';
import { RevenueChart } from '../components/dashboard/RevenueChart';
import { mockRevenueData } from '../data/mockData';

export const Analytics: React.FC = () => {
  const metrics = [
    { 
      title: 'Total Visitas', 
      value: '12,847', 
      change: 12.5, 
      trend: 'up' as const,
      icon: <FiUsers size={24} />,
      color: 'blue' as const
    },
    { 
      title: 'Tasa de Conversión', 
      value: '3.2%', 
      change: 0.8, 
      trend: 'up' as const,
      icon: <FiTrendingUp size={24} />,
      color: 'green' as const
    },
    { 
      title: 'Ingresos Totales', 
      value: '$45,231', 
      change: 18.3, 
      trend: 'up' as const,
      icon: <FiDollarSign size={24} />,
      color: 'purple' as const
    },
    { 
      title: 'Usuarios Activos', 
      value: '3,421', 
      change: -2.1, 
      trend: 'down' as const,
      icon: <FiActivity size={24} />,
      color: 'orange' as const
    }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analíticas</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Métricas y estadísticas detalladas de tu negocio
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RevenueChart data={mockRevenueData} />
        </div>
        
        {/* Resumen */}
        <div className="xl:col-span-1">
          <Card title="Resumen de Métricas">
            <div className="space-y-4">
              {[
                { label: 'Visitas', value: '12,847', change: '+12.5%', color: 'text-blue-600' },
                { label: 'Conversiones', value: '3.2%', change: '+0.8%', color: 'text-green-600' },
                { label: 'Ingresos', value: '$45,231', change: '+18.3%', color: 'text-purple-600' },
                { label: 'Usuarios', value: '3,421', change: '-2.1%', color: 'text-red-600' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                  <span className="text-sm text-gray-600 dark:text-gray-300">{item.label}</span>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{item.value}</span>
                    <span className={`text-xs ml-2 ${item.color}`}>{item.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Tabla de actividades recientes */}
      <Card title="Actividad Reciente" subtitle="Últimos eventos del sistema">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Usuario
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Acción
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {[
                { user: 'María García', action: 'Inició sesión', date: 'Hace 5 min', status: 'Completado' },
                { user: 'Juan Pérez', action: 'Actualizó perfil', date: 'Hace 1 hora', status: 'Completado' },
                { user: 'Ana Martínez', action: 'Realizó pedido #1234', date: 'Hace 3 horas', status: 'Pendiente' },
                { user: 'Carlos López', action: 'Cerró sesión', date: 'Hace 5 horas', status: 'Completado' },
                { user: 'Laura Sánchez', action: 'Registró nuevo usuario', date: 'Hace 8 horas', status: 'Completado' },
              ].map((item, i) => (
                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                    {item.user}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                    {item.action}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                    {item.date}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Completado' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};