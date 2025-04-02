import React, { ReactNode } from "react";
import { Box, Toolbar } from "@mui/material";
import LNBLayout from "@layout/LNBLayout";
import Heading from "@layout/Heading";

interface Props {
  children: ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Heading />
      <LNBLayout />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
