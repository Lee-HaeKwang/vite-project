import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '@pages/LoginPage';
import DashboardPage from '@pages/DashboardPage';
import { useAuthStore } from '../store/authStore';
import MainLayout from '@layout/MainLayout';
const AppRouter = () => {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: isLoggedIn ? '/dashboard' : '/login' }) }), _jsx(Route, { path: "/login", element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "/dashboard", element: isLoggedIn ? _jsx(DashboardPage, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "/users", element: isLoggedIn ? (_jsx(MainLayout, { children: _jsx("div", { children: "\uC0AC\uC6A9\uC790 \uAD00\uB9AC \uD398\uC774\uC9C0" }) })) : (_jsx(Navigate, { to: "/login" })) }), _jsx(Route, { path: "/settings", element: isLoggedIn ? (_jsx(MainLayout, { children: _jsx("div", { children: "\uC124\uC815 \uD398\uC774\uC9C0" }) })) : (_jsx(Navigate, { to: "/login" })) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/" }) })] }));
};
export default AppRouter;
