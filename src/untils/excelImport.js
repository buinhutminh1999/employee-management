import * as XLSX from "xlsx"; // Thêm import này
import { format } from "date-fns"; // Để xử lý ngày tháng
console.log("importExcel function is loaded");

export const importExcel = (file, onDataLoaded) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });
    const sheetName = "2. LÝ LỊCH TRÍCH NGANG"; // Tên sheet chính xác
    const worksheet = workbook.Sheets[sheetName];

    // Đọc dữ liệu từ Excel
    let rawData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

    // Chuẩn hóa dữ liệu
    const jsonData = rawData.map((item) => {
      const excelDateToJsDate = (excelDate) => {
        if (!isNaN(excelDate)) {
          return new Date((excelDate - 25569) * 86400 * 1000); // Chuyển số Excel thành ngày
        }
        return null; // Trả về null nếu giá trị không hợp lệ
      };

      const birthDate = excelDateToJsDate(item["NGÀY SINH"]);
      const issueDate = excelDateToJsDate(item["NGÀY CẤP"]);

      return {
        name: String(item["TÊN"] || "").trim() || "Chưa xác định",
        department: String(item["BỘ PHẬN"] || "").trim() || "Chưa xác định",
        gender: String(item["GIỚI TÍNH"] || "").trim() || "Chưa xác định",
        phone: String(item["SỐ ĐIỆN THOẠI"] || "").trim() || "Chưa xác định",
        birthDate: birthDate ? format(birthDate, "dd/MM/yyyy") : "Chưa xác định",
        citizenID: String(item["CCCD"] || "").trim() || "Chưa xác định",
        issueDate: issueDate ? format(issueDate, "dd/MM/yyyy") : "Chưa xác định",
        issuedPlace: String(item["NƠI CẤP"] || "").trim() || "Chưa xác định",
        hometown: String(item["QUÊ QUÁN"] || "").trim() || "Chưa xác định",
        permanentAddress: String(item["ĐỊA CHỈ THƯỜNG TRÚ"] || "").trim() || "Chưa xác định",
      };
    });

    // Kiểm tra log
    console.log("Processed JSON Data:", jsonData);

    // Gọi callback với dữ liệu đã chuẩn hóa
    onDataLoaded(jsonData);
  };

  reader.readAsArrayBuffer(file);
};
