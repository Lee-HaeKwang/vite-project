import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, TextField, Typography, Container, Box } from "@mui/material";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();
    const handleLogin = () => {
        login();
        navigate("/dashboard");
    };
    return (_jsx(Container, { maxWidth: "xs", children: _jsxs(Box, { sx: { mt: 10 }, children: [_jsx(Typography, { variant: "h4", align: "center", gutterBottom: true, children: "\uB85C\uADF8\uC778" }), _jsx(TextField, { fullWidth: true, label: "\uC544\uC774\uB514", margin: "normal" }), _jsx(TextField, { fullWidth: true, label: "\uBE44\uBC00\uBC88\uD638", type: "password", margin: "normal" }), _jsx(Button, { fullWidth: true, variant: "contained", sx: { mt: 2 }, onClick: handleLogin, children: "\uB85C\uADF8\uC778" })] }) }));
};
export default LoginPage;
