import React from "react";
import ReactDOM from "react-dom/client"; // Dùng createRoot thay vì render
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Lấy element gốc từ DOM
const rootElement = document.getElementById("root");

// Sử dụng createRoot thay cho ReactDOM.render
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
