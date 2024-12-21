import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import ListIcon from "@mui/icons-material/List";
import AddIcon from "@mui/icons-material/Add";

const HomePage = () => {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    departments: 0,
    male: 0,
    female: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const querySnapshot = await getDocs(collection(db, "employees"));
      const employees = querySnapshot.docs.map((doc) => doc.data());

      const departments = new Set(employees.map((emp) => emp.department));
      const male = employees.filter((emp) => emp.gender === "Nam").length;
      const female = employees.filter((emp) => emp.gender === "Nữ").length;

      setStats({
        totalEmployees: employees.length,
        departments: departments.size,
        male,
        female,
      });
    };

    fetchStats();
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
    >
      {/* Tiêu đề chào mừng */}
      <Grid item xs={12} sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            textAlign: "center",
          }}
        >
          Chào mừng đến với hệ thống quản lý nhân sự
        </Typography>
      </Grid>

      {/* Thống kê */}
      <Grid
        container
        spacing={4}
        sx={{ textAlign: "center", maxWidth: "800px" }}
      >
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              bgcolor: "background.paper", // Màu nền xám nhạt
              textAlign: "center",
              border: "1px solid",
              borderColor: "divider", // Viền tinh tế
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "text.primary", // Màu chữ chuyên nghiệp
              }}
            >
              Thống Kê
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Tổng số nhân viên: <b>{stats.totalEmployees}</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Số bộ phận: <b>{stats.departments}</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Nam: <b>{stats.male}</b>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Nữ: <b>{stats.female}</b>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Các nút hành động */}
        <Grid item xs={12} sm={6}>
          <Button
            component={Link}
            to="/employee-list"
            startIcon={<ListIcon />}
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              fontSize: { xs: "12px", md: "16px" },
              padding: { xs: "10px", md: "15px" },
              background: "linear-gradient(45deg, #2196F3, #21CBF3)",
              color: "white",
              "&:hover": {
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              },
            }}
          >
            Danh sách nhân viên
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            component={Link}
            to="/add-employee"
            startIcon={<AddIcon />}
            variant="outlined"
            color="primary"
            fullWidth
            sx={{
              fontSize: { xs: "12px", md: "16px" },
              padding: { xs: "10px", md: "15px" },
              border: "2px solid",
              "&:hover": {
                borderColor: "primary.dark",
                bgcolor: "primary.light",
              },
            }}
          >
            Thêm nhân viên
          </Button>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box
        sx={{
          mt: 4,
          textAlign: "center",
          bgcolor: "background.paper",
          py: 2,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © 2024 Quản Lý Nhân Sự | Liên hệ:{" "}
          <a href="mailto:support@company.com">support@company.com</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
