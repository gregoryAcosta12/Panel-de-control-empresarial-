// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Users } from './pages/Users';
import { Settings } from './pages/Settings';
import { Analytics } from './pages/Analytics';
import { useTheme } from './context/ThemeContext';

// Componente interno para usar el contexto
const AppContent: React.FC = () => {
  const { isDark, toggleDark } = useTheme();
  
  return (
    <Layout isDark={isDark} toggleDark={toggleDark}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Layout>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
};