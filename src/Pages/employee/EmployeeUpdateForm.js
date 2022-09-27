import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import React from "react";
function EmployeeUpdateForm() {
  var config = {
    headers: { "Access-Control-Allow-Origin": "*" },
  };
  const EmployeeState = useLocation();

  const [inputs, setInputs] = useState(EmployeeState.state);

  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;

    setInputs((values) => ({ ...values, [paramName]: paramValue }));
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    // alert(JSON.stringify(inputs));

    axios
      .put("http://localhost:9090/employee/" + inputs.empno, inputs, config)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div
        classNameName="container mt-3"
        style={{ width: "900px", textAlign: "right" }}
      >
        <h2>Employee Update form</h2>
        <form action="" onSubmit={handleSubmit}>
          {/* <div className="mb-3 mt-3">
            <input
              type="hidden"
              name="id"
              value={inputs.id}
              onChange={handleChange}
            />
          </div> */}
          <div className="mb-3 mt-3">
            <input
              type="hidden"
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
          <button
            id={inputs.empno}
            value={inputs.empno}
            type="submit"
            className="btn btn-primary"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
}
export default EmployeeUpdateForm;
