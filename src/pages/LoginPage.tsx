import React from "react";
import { Button, TextField, Typography, Container, Box } from "@mui/material";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          로그인
        </Typography>
        <TextField fullWidth label="아이디" margin="normal" />
        <TextField fullWidth label="비밀번호" type="password" margin="normal" />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          로그인
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
