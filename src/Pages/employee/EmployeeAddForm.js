import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import React from "react";
function EmployeeAddFrom() {
  var config = {
    headers: { "Access-Control-Allow-Origin": "*" },
  };
  const [inputs, setInputs] = useState({});

  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;

    setInputs((values) => ({ ...values, [paramName]: paramValue }));
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    // alert(JSON.stringify(inputs));

    axios
      .post("http://localhost:9090/employee/", inputs, config)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };
  // "empno": "F001",
  //       "basicSal": 34000.0,
  //       "deptno": "F",
  //       "job": "M",
  //       "city": "BOMB",
  //       "email": "ABHISHEK@GMAIL.COM",
  //       "hiredate": "1988-09-21"
  // public EmpDto(String empno, float basicSal, char deptno, char job, String city, String email,Date hiredate)

  //public Emp(String empno, float basicSal, char deptno, char job, String city, String email, float hra,Date hiredate)
  return (
    <div classNameName="container mt-3 ">
      <h2>Employee Add form</h2>
      <div
        className="container mt-3 "
        style={{ width: "500px", textAlign: "right" }}
      >
        <Form action="" onSubmit={handleSubmit}>
          <div className="mb-3 mt-3 "></div>

          <div className="mb-3 mt-3">
            <label forname="empno" className="form-label">
              Employee Number:
            </label>
            <input
              type="text"
              name="empno"
              value={inputs.empno}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label forname="basicSal" className="form-label">
              Basic Salary:
            </label>
            <input
              type="text"
              name="basicSal"
              value={inputs.basicSal}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label forname="deptno" className="form-label">
              Dept no:
            </label>
            <input
              type="text"
              name="deptno"
              value={inputs.deptno}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label forname="job" className="form-label">
              Job:
            </label>
            <input
              type="text"
              name="job"
              value={inputs.job}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label forname="city" className="form-label">
              city:
            </label>
            <input
              type="text"
              name="city"
              value={inputs.city}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label forname="email" className="form-label">
              Email:
            </label>
            <input
              type="mail"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label forname="hiredate" className="form-label">
              Hiredate:
            </label>
            <input
              type="text"
              name="hiredate"
              value={inputs.hiredate}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </Form>
      </div>
    </div>
  );
}
export default EmployeeAddFrom;
