import React, { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { TextField, Button, Box } from '@mui/material';

const AddEmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    department: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'employees'), employee);
      alert('Employee added successfully!');
      setEmployee({ name: '', department: '', phone: '', email: '' });
    } catch (err) {
      console.error('Error adding employee:', err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 3, maxWidth: 500, margin: 'auto' }}>
      <TextField
        label="Name"
        name="name"
        value={employee.name}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Department"
        name="department"
        value={employee.department}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Phone"
        name="phone"
        value={employee.phone}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Email"
        name="email"
        value={employee.email}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Employee
      </Button>
    </Box>
  );
};

export default AddEmployeeForm;
