import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Toolbar } from "@mui/material";
import LNBLayout from "@layout/LNBLayout";
import Heading from "@layout/Heading";
const MainLayout = ({ children }) => {
    return (_jsxs(Box, { sx: { display: "flex" }, children: [_jsx(Heading, {}), _jsx(LNBLayout, {}), _jsxs(Box, { component: "main", sx: { flexGrow: 1, p: 3 }, children: [_jsx(Toolbar, {}), children] })] }));
};
export default MainLayout;
