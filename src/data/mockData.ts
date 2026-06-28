import type { User, Metric, RevenueData, ActivityData } from '../types';
import React from 'react';
import { FiUsers, FiDollarSign, FiTrendingUp, FiActivity } from 'react-icons/fi';

export const mockUsers: User[] = [
  {
    id: 1,
    name: 'Ana García',
    email: 'ana.garcia@email.com',
    role: 'Admin',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=1',
    lastActive: '2024-01-20T10:30:00',
    joinedDate: '2023-06-15'
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    email: 'carlos.rodriguez@email.com',
    role: 'Manager',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=2',
    lastActive: '2024-01-19T15:45:00',
    joinedDate: '2023-08-22'
  },
  {
    id: 3,
    name: 'María López',
    email: 'maria.lopez@email.com',
    role: 'User',
    status: 'Inactive',
    avatar: 'https://i.pravatar.cc/150?img=3',
    lastActive: '2024-01-15T09:20:00',
    joinedDate: '2023-11-01'
  },
  {
    id: 4,
    name: 'Juan Martínez',
    email: 'juan.martinez@email.com',
    role: 'User',
    status: 'Pending',
    avatar: 'https://i.pravatar.cc/150?img=4',
    lastActive: '2024-01-18T14:10:00',
    joinedDate: '2024-01-10'
  },
  {
    id: 5,
    name: 'Laura Sánchez',
    email: 'laura.sanchez@email.com',
    role: 'Manager',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=5',
    lastActive: '2024-01-20T11:00:00',
    joinedDate: '2023-09-05'
  }
];

export const mockMetrics: Metric[] = [
  {
    title: 'Usuarios Totales',
    value: '12,458',
    change: 12.5,
    icon: React.createElement(FiUsers, { size: 24 }),
    trend: 'up'
  },
  {
    title: 'Ingresos Mensuales',
    value: '$45,230',
    change: -3.2,
    icon: React.createElement(FiDollarSign, { size: 24 }),
    trend: 'down'
  },
  {
    title: 'Tasa de Conversión',
    value: '3.45%',
    change: 0.8,
    icon: React.createElement(FiTrendingUp, { size: 24 }),
    trend: 'up'
  },
  {
    title: 'Sesiones Activas',
    value: '2,345',
    change: 18.7,
    icon: React.createElement(FiActivity, { size: 24 }),
    trend: 'up'
  }
];

export const mockRevenueData: RevenueData[] = [
  { month: 'Ene', revenue: 35000, expenses: 20000, profit: 15000 },
  { month: 'Feb', revenue: 42000, expenses: 22000, profit: 20000 },
  { month: 'Mar', revenue: 38000, expenses: 19000, profit: 19000 },
  { month: 'Abr', revenue: 45000, expenses: 23000, profit: 22000 },
  { month: 'May', revenue: 52000, expenses: 25000, profit: 27000 },
  { month: 'Jun', revenue: 48000, expenses: 24000, profit: 24000 },
  { month: 'Jul', revenue: 55000, expenses: 27000, profit: 28000 },
  { month: 'Ago', revenue: 60000, expenses: 30000, profit: 30000 },
  { month: 'Sep', revenue: 58000, expenses: 28000, profit: 30000 },
  { month: 'Oct', revenue: 62000, expenses: 32000, profit: 30000 },
  { month: 'Nov', revenue: 65000, expenses: 33000, profit: 32000 },
  { month: 'Dic', revenue: 70000, expenses: 35000, profit: 35000 }
];

export const mockActivityData: ActivityData[] = [
  { date: '2024-01-01', users: 1200, sessions: 3400 },
  { date: '2024-01-02', users: 1350, sessions: 3800 },
  { date: '2024-01-03', users: 1100, sessions: 3100 },
  { date: '2024-01-04', users: 1500, sessions: 4200 },
  { date: '2024-01-05', users: 1800, sessions: 5000 },
  { date: '2024-01-06', users: 1600, sessions: 4500 },
  { date: '2024-01-07', users: 1400, sessions: 3900 } // No comma needed here since it's the last item
];