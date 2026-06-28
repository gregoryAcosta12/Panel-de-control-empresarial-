import React from 'react';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

interface FiltersProps {
  onSearch: (term: string) => void;
  onFilter: (filter: string) => void;
}

export const Filters: React.FC<FiltersProps> = ({ onSearch, onFilter }) => {
  return (
    <Card className="mb-6">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex-1 min-w-[200px]">
          <Input
            placeholder="Buscar..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <select
          onChange={(e) => onFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">Todos</option>
          <option value="active">Activos</option>
          <option value="inactive">Inactivos</option>
          <option value="pending">Pendientes</option>
        </select>
        <Button variant="primary">Aplicar Filtros</Button>
        <Button variant="secondary">Limpiar</Button>
      </div>
    </Card>
  );
};