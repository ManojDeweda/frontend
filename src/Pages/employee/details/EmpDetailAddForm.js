import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import React from "react";
function EmpDetailAddFrom() {
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
      .post("http://localhost:9090/employee/details", inputs, config)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div classNameName="container mt-3 ">
      <h2>EmpDetail Add form</h2>
      <div
        className="container mt-3 "
        style={{ width: "500px", textAlign: "right" }}
      >
        <Form action="" onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label forName="empno" className="form-label">
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
            <label forName="ename" className="form-label">
              Employee Name:
            </label>
            <input
              type="text"
              name="ename"
              value={inputs.ename}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label forName="mobileNumber" className="form-label">
              Mobile Number:
            </label>
            <input
              type="text"
              name="mobileNumber"
              value={inputs.mobileNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label forName="gender" className="form-label">
              Gender:
            </label>
            <input
              type="text"
              name="gender"
              value={inputs.gender}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label forName="city" className="form-label">
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
            <label forName="aadhar" className="form-label">
              Aadhar:
            </label>
            <input
              type="mail"
              name="aadhar"
              value={inputs.aadhar}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label forName="dob" className="form-label">
              Birth :
            </label>
            <input
              type="date"
              name="dob"
              value={inputs.dob}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label forName="pinCode" className="form-label">
              pinCode : Birth ate:
            </label>
            <input
              type="text"
              name="pinCode"
              value={inputs.pinCode}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label forName="address" className="form-label">
              address :
            </label>
            <input
              type="text"
              name="address"
              value={inputs.address}
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
export default EmpDetailAddFrom;
