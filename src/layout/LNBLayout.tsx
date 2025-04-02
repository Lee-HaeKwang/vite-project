import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
  { label: "대시보드", path: "/dashboard" },
  { label: "사용자 관리", path: "/users" },
  { label: "설정", path: "/settings" },
];

const LNBLayout: React.FC = () => {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.label}
            component={RouterLink}
            to={item.path}
            selected={location.pathname === item.path}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default LNBLayout;
