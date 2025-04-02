import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, Typography } from "@mui/material";
import { useUserStore } from "../store/useUserStore";
const UserCard = () => {
    const { userId, userName } = useUserStore();
    return (_jsx(Card, { sx: { maxWidth: 300, margin: "20px auto" }, children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h6", children: "\uC720\uC800 \uC815\uBCF4" }), _jsxs(Typography, { children: ["ID: ", userId] }), _jsxs(Typography, { children: ["Name: ", userName] })] }) }));
};
export default UserCard;
