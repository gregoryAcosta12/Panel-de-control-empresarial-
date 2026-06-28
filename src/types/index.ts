export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'User' | 'Manager';
  status: 'Active' | 'Inactive' | 'Pending';
  avatar: string;
  lastActive: string;
  joinedDate: string;
}

export interface Metric {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  trend: 'up' | 'down' | 'neutral';
}

export interface RevenueData {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
}

export interface ActivityData {
  date: string;
  users: number;
  sessions: number;
}