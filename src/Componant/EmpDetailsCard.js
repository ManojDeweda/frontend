
import { useEffect, useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import EmpCard from "./EmpCard";
import { Avatar } from "@mui/material";

function EmpDetailsCard() {
  var config = {
    headers: { "Access-Control-Allow-Origin": "*" },
  };
  const EmployeeState = useLocation();
  const [responseData, setResponseData] = useState([]);
  //const [inputs, setInputs] = useState(EmployeeState.state);
  //let id = "P001";
  //console.log(id);
  console.log(EmployeeState.state.empno);
  const EmpDetailsCard = () => {
    axios
      .get("http://localhost:9090/employee/details/" + EmployeeState.state.empno, {
        method: "GET",
        mode: "no-cors",
      })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };
  console.log(responseData);
  useEffect(() => {
    EmpDetailsCard();
  }, []);

  return (
    <>
      <div className="container">
        
      
      
      <div className="row">
        <div className="col-12 col-md-10 md-2 mx-auto ">
         <div className="card" >
         <h2 className="text-center">Detailed Employee Information</h2>
        <div>
            <div align="center" className="mt-2">
              <Avatar
                style={{border: '4px solid rgba(251, 232, 166, 1) '}}
                src={"http://localhost:9090/images/"+EmployeeState.state.photo}
                sx={{ width: 250, height: 250 }}
              />
              <h3>{EmployeeState.state.ename}</h3>
            </div>
            
          </div>
         <div className="row">
          <div className="col-12 col-md-6 md-2">
            <div className="card-body"></div>
             <table className="table mt-2">
                  <thead>
                    <tr>
                      <th>Employee Number</th>
                      <td>{EmployeeState.state.empno}</td>
                    </tr>
                    {/* <tr>
                      <th>Employee Name</th>
                      <td>{EmployeeState.state.ename}</td>
                    </tr> */}
                    <tr>
                      <th>EMAIL</th>
                      <td>{EmployeeState.state.email}</td>
                    </tr>
                    <tr>
                      <th>HIREDATE</th>
                      <td>{EmployeeState.state.hiredate}</td>
                    </tr>
                    <tr>
                      <th>DEPT</th>
                      <td>{EmployeeState.state.deptno}</td>
                    </tr>
                    <tr>
                      <th>JOB</th>
                      <td>{EmployeeState.state.job}</td>
                    </tr>
                    <tr>
                      <th>CITY</th>
                      <td>{EmployeeState.state.city}</td>
                    </tr>
                  </thead>
                </table>
          </div>
          <div className="col-12 col-md-6 md-2">
            <div className="card-body"></div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Employee Number</th>
                  <td>{responseData.empno}</td>
                </tr>
                {/* <tr>
                   <th>Employee Name</th>
                   <td>{EmployeeState.state.ename}</td>
                </tr> */}
                  
                <tr>
                  <th>Mobile No.</th>
                  <td>{responseData.mobileNumber}</td>
                </tr>

                <tr>
                  <th>Gender</th>
                  <td>{responseData.gender}</td>
                </tr>

                <tr>    
                  <th>Aadhar No.</th>
                  <td>{responseData.aadhar}</td>
                </tr>

                <tr>

                  <th>DOB</th>
                  <td>{responseData.dob}</td>
                </tr>
                <tr>
                  <th>CITY</th>
                  <td>{responseData.city}</td>
                </tr>

                <tr>
                  <th>pin Code</th>
                  <td>{responseData.pinCode}</td>
                </tr>

                <tr>
                  <th>Address</th>
                  <td>{responseData.address}</td>
                </tr>

                <tr>
                  
                  <td>
                    <Link
                      to="/employee/details/update"
                      state={responseData}
                      className="btn bg-primary"
                    >
                      Update
                    </Link>{" "}
                  </td>
                </tr>
                  
              </thead>

              {/* {responseData.map((val) => ( */}
              <tr key="{val.empno}"></tr>
              {/* ))} */}
            </table>
          </div>
          </div>
         </div> 
          
      </div>
    </div>
    </div>
    </>
  );
}

export default EmpDetailsCard;

// empno: 'F002', mobileNumber: 9869989658, gender: 'M', aadhar: 113456788765, dob: '1975-01-30', …}
// aadhar
// : 
// 113456788765
// address
// : 
// "12/SAI SADAN, KISSAN NAGAR, BHATWADI, THANE"
// city
// : 
// "BOMB"
// dob
// : 
// "1975-01-30"
// empno
// : 
// "F002"
// gender
// : 
// "M"
// mobileNumber
// : 
// 9869989658
// pinCode
// : 
// 400612