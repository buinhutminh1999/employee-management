import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const PreviewTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>Không có dữ liệu để hiển thị.</p>;
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Họ và Tên</TableCell>
          <TableCell>Bộ Phận</TableCell>
          <TableCell>Giới Tính</TableCell>
          <TableCell>Số Điện Thoại</TableCell>
          <TableCell>Ngày Sinh</TableCell>
          <TableCell>CCCD</TableCell>
          <TableCell>Ngày Cấp</TableCell>
          <TableCell>Nơi Cấp</TableCell>
          <TableCell>Quê Quán</TableCell>
          <TableCell>Địa Chỉ Thường Trú</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.name || "Chưa xác định"}</TableCell>
            <TableCell>{row.department || "Chưa xác định"}</TableCell>
            <TableCell>{row.gender || "Chưa xác định"}</TableCell>
            <TableCell>{row.phone || "Chưa xác định"}</TableCell>
            <TableCell>{row.birthDate || "Chưa xác định"}</TableCell>
            <TableCell>{row.citizenID || "Chưa xác định"}</TableCell>
            <TableCell>{row.issueDate || "Chưa xác định"}</TableCell>
            <TableCell>{row.issuedPlace || "Chưa xác định"}</TableCell>
            <TableCell>{row.hometown || "Chưa xác định"}</TableCell>
            <TableCell>{row.permanentAddress || "Chưa xác định"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PreviewTable;
