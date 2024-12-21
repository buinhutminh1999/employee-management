import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./services/firebase";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AddEmployeeForm from "./components/AddEmployeeForm";
import EmployeeList from "./components/EmployeeList";
import ImportEmployees from "./pages/ImportEmployees";

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const querySnapshot = await getDocs(collection(db, "employees"));
      const employeeData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEmployees(employeeData);
    };

    fetchEmployees();
  }, []);

  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-employee" element={<AddEmployeeForm />} />
        <Route
          path="/employee-list"
          element={
            <EmployeeList data={employees} onUpdate={handleUpdateEmployee} />
          }
        />
        <Route path="/import" element={<ImportEmployees />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
