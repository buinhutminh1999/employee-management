import React, { useState } from "react";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";
import { importExcel } from "../untils/excelImport";
import PreviewTable from "../components/PreviewTable";
import { Snackbar } from "@mui/material";

const validateEmployee = (employee) => {
  return employee.name && employee.department && employee.gender && employee.phone && employee.citizenID;
};

const ImportEmployees = () => {
  const [previewData, setPreviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: "" });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    importExcel(file, (data) => {
      setPreviewData(data); // Hiển thị preview dữ liệu
    });
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      let savedCount = 0;
      let skippedCount = 0;
      const employeesCollection = collection(db, "employees");

      for (const employee of previewData) {
        // Kiểm tra tính hợp lệ
        if (!validateEmployee(employee)) {
          console.warn(`Dữ liệu không hợp lệ cho nhân viên:`, employee);
          skippedCount++;
          continue; // Bỏ qua bản ghi không hợp lệ
        }

        // Kiểm tra trùng lặp dựa trên citizenID
        const q = query(employeesCollection, where("citizenID", "==", employee.citizenID));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          console.warn(`Nhân viên với CCCD ${employee.citizenID} đã tồn tại. Bỏ qua.`);
          skippedCount++;
          continue; // Bỏ qua nếu đã tồn tại
        }

        // Thêm bản ghi mới nếu không trùng
        await addDoc(employeesCollection, employee);
        savedCount++;
      }

      setNotification({
        open: true,
        message: `Lưu thành công: ${savedCount} bản ghi, bỏ qua: ${skippedCount} bản ghi.`,
      });
    } catch (error) {
      console.error("Lỗi khi lưu dữ liệu:", error.message);
      setNotification({
        open: true,
        message: `Lỗi khi lưu dữ liệu: ${error.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Import Dữ Liệu Nhân Sự</h2>
      <input type="file" accept=".xlsx" onChange={handleFileUpload} />
      <PreviewTable data={previewData} />
      <button onClick={handleSave} disabled={isLoading}>
        {isLoading ? "Đang lưu..." : "Lưu Dữ Liệu"}
      </button>

      {/* Snackbar hiển thị thông báo */}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        message={notification.message}
        onClose={() => setNotification({ ...notification, open: false })}
      />
    </div>
  );
};

export default ImportEmployees;
