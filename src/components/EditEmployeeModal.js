import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

const EditEmployeeModal = ({ employee, open, onClose, onSave }) => {
  const [formData, setFormData] = useState({ ...employee });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: 400,
        }}
      >
        <h2>Chỉnh sửa thông tin nhân viên</h2>
        <TextField
          fullWidth
          margin="normal"
          label="Họ và Tên"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Bộ Phận"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Giới Tính"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Số Điện Thoại"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 2 }}>
          <Button onClick={onClose}>Hủy</Button>
          <Button variant="contained" onClick={handleSave}>
            Lưu
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditEmployeeModal;
