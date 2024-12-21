import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Badge,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log("Tìm kiếm: ", event.target.value); // Xử lý tìm kiếm tại đây
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* Logo và tiêu đề */}
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 2, flexGrow: 1 }}
          >
            <img
              src="https://bachkhoaangiang.com/images/logo-bach-khoa-an-giang.png"
              alt="Logo"
              style={{ width: "40px", height: "40px" }}
            />
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "16px", md: "20px" } }}
            >
              Quản Lý Nhân Sự
            </Typography>
          </Box>

          {/* Thanh tìm kiếm */}
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}
          >
            <SearchIcon />
            <TextField
              variant="outlined"
              placeholder="Tìm kiếm..."
              size="small"
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{ bgcolor: "white", borderRadius: 1, width: "100%" }}
            />
          </Box>

          {/* Biểu tượng thông báo */}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Menu Hamburger cho màn hình nhỏ */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Menu điều hướng cho màn hình lớn */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{
                bgcolor: isActive("/") ? "rgba(255, 255, 255, 0.2)" : "inherit",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              Trang Chủ
            </Button>
            <Button
              component={Link}
              to="/employee-list"
              color="inherit"
              sx={{
                bgcolor: isActive("/employee-list")
                  ? "rgba(255, 255, 255, 0.2)"
                  : "inherit",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              Danh Sách
            </Button>
            <Button
              component={Link}
              to="/add-employee"
              color="inherit"
              sx={{
                bgcolor: isActive("/add-employee")
                  ? "rgba(255, 255, 255, 0.2)"
                  : "inherit",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              Thêm nhân viên
            </Button>
            <Button
              component={Link}
              to="/import"
              color="inherit"
              sx={{
                bgcolor: isActive("/import")
                  ? "rgba(255, 255, 255, 0.2)"
                  : "inherit",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              Import
            </Button>

            {/* Thêm nút Attendance App */}
            <Button
              component="a"
              href="https://attendance-app-one-pi.vercel.app/"
              target="_blank" // Mở trang trong tab mới
              color="inherit"
              sx={{
                bgcolor: isActive("https://attendance-app-one-pi.vercel.app/")
                  ? "rgba(255, 255, 255, 0.2)"
                  : "inherit",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              Attendance App
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Menu cho màn hình nhỏ */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 250,
            p: 2,
            textAlign: "center",
            bgcolor: "primary.main",
            color: "white",
          }}
        >
          <Typography variant="h6">Quản Lý Nhân Sự</Typography>
        </Box>
        <List>
          <ListItem button component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary="Trang Chủ" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/employee-list"
            onClick={toggleDrawer}
          >
            <ListItemText primary="Danh Sách" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/add-employee"
            onClick={toggleDrawer}
          >
            <ListItemText primary="Thêm Nhân Viên" />
          </ListItem>
          <ListItem button component={Link} to="/import" onClick={toggleDrawer}>
            <ListItemText primary="Import" />
          </ListItem>

          {/* Thêm liên kết đến Attendance App trong Drawer */}
          <ListItem
            button
            component="a"
            href="https://attendance-app-one-pi.vercel.app/"
            target="_blank"
            onClick={toggleDrawer}
          >
            <ListItemText primary="Attendance App" />
          </ListItem>
        </List>
        <Box
          sx={{ mt: 2, p: 2, textAlign: "center", bgcolor: "primary.light" }}
        >
          <Typography variant="body2">© 2024 Quản Lý Nhân Sự</Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
