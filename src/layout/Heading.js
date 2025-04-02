import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
const Heading = () => {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return (_jsx(AppBar, { position: "fixed", sx: { zIndex: 1300 }, children: _jsxs(Toolbar, { sx: { display: "flex", justifyContent: "space-between" }, children: [_jsx(Typography, { variant: "h6", children: "\uD615\uB2D8 \uB300\uC2DC\uBCF4\uB4DC" }), _jsx(Button, { color: "inherit", onClick: handleLogout, children: "\uB85C\uADF8\uC544\uC6C3" })] }) }));
};
export default Heading;
