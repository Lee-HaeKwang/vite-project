import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, Typography } from "@mui/material";
const UserCard = () => {
    return (_jsx(Card, { sx: { maxWidth: 300, margin: "20px auto" }, children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h6", children: "\uC720\uC800 \uC815\uBCF4" }), _jsx(Typography, { children: "ID: tester ID" }), _jsx(Typography, { children: "Name: testser NAME" })] }) }));
};
export default UserCard;
