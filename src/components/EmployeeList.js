import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from "@mui/material";
import EditEmployeeModal from "./EditEmployeeModal";

const EmployeeList = ({ data, onUpdate }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleSave = (updatedEmployee) => {
    onUpdate(updatedEmployee);
    setSelectedEmployee(null);
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Họ và Tên</TableCell>
            <TableCell>Bộ Phận</TableCell>
            <TableCell>Giới Tính</TableCell>
            <TableCell>Số Điện Thoại</TableCell>
            <TableCell>Hành Động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.gender}</TableCell>
              <TableCell>{employee.phone}</TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => handleEdit(employee)}>
                  Chỉnh Sửa
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedEmployee && (
        <EditEmployeeModal
          employee={selectedEmployee}
          open={!!selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
          onSave={handleSave}
        />
      )}
    </TableContainer>
  );
};

export default EmployeeList;
