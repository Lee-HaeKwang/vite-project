import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Drawer, List, ListItemButton, ListItemText, Toolbar, } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
const drawerWidth = 240;
const menuItems = [
    { label: "대시보드", path: "/dashboard" },
    { label: "사용자 관리", path: "/users" },
    { label: "설정", path: "/settings" },
];
const LNBLayout = () => {
    const location = useLocation();
    return (_jsxs(Drawer, { variant: "permanent", sx: {
            width: drawerWidth,
            [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
            },
        }, children: [_jsx(Toolbar, {}), _jsx(List, { children: menuItems.map((item) => (_jsx(ListItemButton, { component: RouterLink, to: item.path, selected: location.pathname === item.path, children: _jsx(ListItemText, { primary: item.label }) }, item.label))) })] }));
};
export default LNBLayout;
