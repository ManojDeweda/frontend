import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import React from "react";
const Signup = () => {
  const styles = {
    container: {
      width: 1200,
      height: 475,
      padding: 20,
      position: "relative",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: "auto",
      borderColor: "#db0f62",
      borderRadius: 10,
      borderWidth: 0,
      borderStyle: "solid",
    },
    signinButton: {
      position: "relative",
      width: "20%",
      height: 40,
      backgroundColor: "#db0f62",
      color: "white",
      borderRadius: 5,
      marginBottom: 20,
    },
  };

  const [inputs, setInputs] = useState({});

  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;
    console.log(paramName);
    console.log(paramValue);
    setInputs((values) => ({ ...values, [paramName]: paramValue }));
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    alert(JSON.stringify(inputs));

    axios
      .post("http://localhost:8080/visitor/register.paradise", inputs)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <div className="vh-100 d-flex">
        <form className="col-md-6">
          <div className="container">
            <div className="col-md-6">
              <label className="form-label">Aadhar Number : </label>
              <input
                type="text"
                name="aadharno"
                value={inputs.aadharno}
                onChange={handleChange}
                className="form-control"
                style={{ marginBottom: 20 }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Name : </label>
              <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                className="form-control"
                style={{ marginBottom: 20 }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Mobile Number : </label>
              <input
                type="text"
                name="mobno"
                value={inputs.mobno}
                onChange={handleChange}
                className="form-control"
                style={{ marginBottom: 20 }}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Email : </label>
              <input
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Username : </label>
              <input
                type="text"
                name="username"
                value={inputs.username}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password : </label>
              <input
                type="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                className="form-control"
              />{" "}
            </div>{" "}
            <div className="col-6 mt-10" style={{ marginTop: 40 }}>
              {" "}
              <button
                type="submit"
                className="btn btn-primary btn-lg active"
                onClick={handleSubmit}
              >
                Register here
              </button>
              <div className="float-end">
                Existing User: <Link to="/Login/login">Login Here</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
