import React from 'react';
import { FiSearch, FiBell, FiUser } from 'react-icons/fi';
import { Input } from '../ui/Input';

export const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Buscar..."
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative">
            <FiBell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <FiUser size={16} />
            </div>
            <span className="hidden md:block text-sm font-medium">Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
};