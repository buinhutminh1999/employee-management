import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material"; // Thêm các icon mạng xã hội

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        color: "white",
        py: 3,
        textAlign: "center",
        mt: 4,
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.15)", // Giảm độ bóng mờ
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        © 2024 - Công ty Quản Lý Nhân Sự
      </Typography>

      {/* Liên kết chính sách và điều khoản */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
        <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
          Chính sách bảo mật
        </Link>
        <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
          Điều khoản dịch vụ
        </Link>
        <Link href="mailto:support@company.com" color="inherit" sx={{ textDecoration: "none" }}>
          Liên hệ
        </Link>
      </Box>

      {/* Các biểu tượng mạng xã hội */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        <IconButton href="https://www.facebook.com" color="inherit">
          <Facebook />
        </IconButton>
        <IconButton href="https://www.linkedin.com" color="inherit">
          <LinkedIn />
        </IconButton>
        <IconButton href="https://www.twitter.com" color="inherit">
          <Twitter />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
