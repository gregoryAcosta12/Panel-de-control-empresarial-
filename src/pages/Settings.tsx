import React from 'react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Configuración</h1>
        <p className="text-gray-500 dark:text-gray-400">Personaliza la aplicación</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Perfil">
          <form className="space-y-4">
            <Input label="Nombre" defaultValue="Admin User" />
            <Input label="Email" defaultValue="admin@empresa.com" type="email" />
            <Input label="Teléfono" defaultValue="+34 123 456 789" />
            <Button variant="primary">Guardar Cambios</Button>
          </form>
        </Card>

        <Card title="Preferencias">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Notificaciones</span>
              <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Modo Oscuro</span>
              <input type="checkbox" className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Autoguardado</span>
              <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};