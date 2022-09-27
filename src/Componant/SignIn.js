import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
const SignIn = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (evnt) => {
    let paramName = evnt.target.name;
    let paramValue = evnt.target.value;
    // console.log(paramName);
    // console.log(paramValue);

    setInputs((values) => ({ ...values, [paramName]: paramValue }));
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();

    axios
      .get(
        `http://localhost:9090/visitor/login.paradise/${inputs.username}/${inputs.password}`
      )
      .then((response) => {
        localStorage.setItem("username", JSON.stringify(response));
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="align-items-center">
        <div className="justify-content-center d-flex">
          <div className="btn1">
            <Button onclick="myAdmin()" variant="Outlined">
              Admin
            </Button>
            <Button onclick="myEmployee()" variant="Outlined">
              Employee
            </Button>
            <Button onclick="myCustomer()" variant="Outlined">
              Customer
            </Button>
          </div>
        </div>
        <div>
          <div style={styles.container}>
            <div className="mb-3" style={{ marginBottom: 20 }}>
              <label className="form-label">username </label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter username"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password </label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                onChange={handleChange}
              ></input>
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <div>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
                Login
              </button>
              <div>
                Don't have an account?<Link to="/Login"> Login Here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    width: 400,
    height: 300,
    padding: 20,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    marginBottom: 20,
    marginTop: 20,
    margin: "auto",
    borderColor: "#db0f62",
    borderRadius: 10,
  },

  signinButton: {
    position: "relative",
    width: "50%",
    height: 40,
    backgroundColor: "#db0f62",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginBottom: 20,
  },
  // container: {
  //   width: 500px;
  //   height: 250px;
  //   margin: 50px;
  //   outline: solid 1px black;
  // },

  // circle: {
  //   width: 50px;
  //   height: 50px;
  //   border-radius: 50%;
  //   background-color: black;
  // },
};

export default SignIn;
