import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  toggleDark: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, isDark, toggleDark }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar isDark={isDark} toggleDark={toggleDark} />
      <div className="lg:ml-64 transition-all duration-300">
        <Header />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};