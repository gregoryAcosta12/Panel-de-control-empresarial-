import React, { useState } from 'react';
import { UserTable } from '../components/dashboard/UserTable';
import { Filters } from '../components/dashboard/Filters';
import { mockUsers } from '../data/mockData';

export const Users: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilter = (filter: string) => {
    setFilterStatus(filter);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Usuarios</h1>
        <p className="text-gray-500 dark:text-gray-400">Gestiona los usuarios del sistema</p>
      </div>

      <Filters onSearch={handleSearch} onFilter={handleFilter} />
      <UserTable users={mockUsers} />
    </div>
  );
};