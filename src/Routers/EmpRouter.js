import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../Welcome";

import AdminLayout from "../Pages/employee/AdminLayout";
import EmployeeList from "../Pages/employee/EmployeeList";
import EmployeeAddForm from "../Pages/employee/EmployeeAddForm";
import EmployeeUpdateForm from "../Pages/employee/EmployeeUpdateForm";
import EmployeeUploadForm from "../Pages/employee/EmployeeUploadForm";

import EmpDetailList from "../Pages/employee/details/EmpDetailList";
import EmpDetailAddForm from "../Pages/employee/details/EmpDetailAddForm";
import EmpDetailUpdateForm from "../Pages/employee/details/EmpDetailUpdateForm";
import React from "react";
function EmpRouter() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Welcome />}></Route> */}
          <Route path="/employee/" element={<AdminLayout />}>
            <Route index element={<EmployeeList />}></Route>
            <Route path="list" element={<EmployeeList />}></Route>
            <Route path="add" element={<EmployeeAddForm />}></Route>
            <Route path="update" element={<EmployeeUpdateForm />}></Route>
            <Route path="upload" element={<EmployeeUploadForm />}></Route>

            <Route
              path="/employee/details/list"
              element={<EmpDetailList />}
            ></Route>
            <Route
              path="/employee/details/add"
              element={<EmpDetailAddForm />}
            ></Route>
            <Route
              path="/employee/details/update"
              element={<EmpDetailUpdateForm />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default EmpRouter;
