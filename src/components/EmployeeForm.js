import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const EmployeeForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Tên nhân viên"
        value={formData.name || ""}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="department"
        label="Bộ phận"
        value={formData.department || ""}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="position"
        label="Vị trí"
        value={formData.position || ""}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Lưu
      </Button>
    </form>
  );
};

export default EmployeeForm;
