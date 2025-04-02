import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@pages/LoginPage';
import DashboardPage from '@pages/DashboardPage';
import { useAuthStore } from '../store/authStore';
import MainLayout from '@layout/MainLayout';

const AppRouter: React.FC = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={isLoggedIn ? '/dashboard' : '/login'} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" />} />
      <Route
        path="/users"
        element={
          isLoggedIn ? (
            <MainLayout>
              <div>사용자 관리 페이지</div>
            </MainLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/settings"
        element={
          isLoggedIn ? (
            <MainLayout>
              <div>설정 페이지</div>
            </MainLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      {/* 404 */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
