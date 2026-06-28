import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiUsers, 
  FiSettings, 
  FiBarChart2,
  FiMenu,
  FiX,
  FiLogOut,
  FiSun,
  FiMoon
} from 'react-icons/fi';
import { cn } from '../../utils/cn';

interface SidebarProps {
  isDark: boolean;
  toggleDark: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isDark, toggleDark }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: FiHome },
    { path: '/users', label: 'Usuarios', icon: FiUsers },
    { path: '/analytics', label: 'Analíticas', icon: FiBarChart2 },
    { path: '/settings', label: 'Configuración', icon: FiSettings },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={cn(
        'fixed top-0 left-0 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-40',
        isOpen ? 'w-64' : 'w-0 -translate-x-full lg:translate-x-0 lg:w-20',
        'overflow-hidden'
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              
              <span className={cn(
                'font-bold text-xl text-gray-900 dark:text-white transition-opacity',
                !isOpen && 'lg:opacity-0 lg:hidden'
              )}>
                Control Panel
              </span>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                    isActive 
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  )}
                >
                  <Icon size={20} />
                  <span className={cn(
                    'transition-opacity',
                    !isOpen && 'lg:opacity-0 lg:hidden'
                  )}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
            <button
              onClick={toggleDark}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
              <span className={cn(
                'transition-opacity',
                !isOpen && 'lg:opacity-0 lg:hidden'
              )}>
                {isDark ? 'Claro' : 'Oscuro'}
              </span>
            </button>
            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
              <FiLogOut size={20} />
              <span className={cn(
                'transition-opacity',
                !isOpen && 'lg:opacity-0 lg:hidden'
              )}>
                Cerrar Sesión
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};