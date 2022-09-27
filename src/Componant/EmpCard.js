import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdPersonSearch } from "react-icons/md";
import "../../src/Style/AdminEmp.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { GrEdit} from "react-icons/gr";

import { IoTrashSharp } from "react-icons/io5";
import axios from "axios";
import { color } from "@mui/system";
function EmpCard() {
  const [responseData, setResponseData] = useState([]);

  const EmployeeList = () => {
    axios
      .get("http://localhost:9090/employee")
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    EmployeeList();
  }, []);

  const EmployeeDelete = (evnt) => {
    axios
      .delete("http://localhost:9090/employee/" + evnt.target.value)
      .then((response) => {
        EmployeeList();
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleSelect=(e)=>{
    axios
      .get("http://localhost:9090/employee/dept/"+e)
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  //=============================================================
    return (
        <>
            <div className="row" align="center" mt-5 mb-5>
                <div className="col-12 col-md-4 mb-1 mt-5" align="center">
                    <Dropdown onSelect={handleSelect}>
                        <Dropdown.Toggle variant="info" id="dropdown-basic" >
                            Sort By Department
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="P" value="P">Production</Dropdown.Item>
                            <Dropdown.Item eventKey="F" value="F">Finnace</Dropdown.Item>
                            <Dropdown.Item eventKey="R" value="R">R & D</Dropdown.Item>
                            <Dropdown.Item eventKey="S" value="S">Sale</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                
                
                <div className="col-12 col-md-4 mb-5 mt-5  text-Align-center">
                    <input type="text" placeholder="Emp No." className="textbox p-2" name="empno" />
                    <button type="button" className="mx-1 icon" style={{border: "none"}}>
                        <MdPersonSearch style={{color:"rgba(48, 60, 108, 1) ", fontSize: "2.75em"}}/>
                    </button>
                </div>

                
                <div className="col-12 col-md-4 mb-5 mt-5" align="center">
                    <button type="button" className="btn mx-1 icon" style={{border: "none"}}>
                        <Link to="/Employee/add" className="">
                            Add New Employee
                        </Link>
                    </button>
                </div>
            </div>


            <div className="row mx-2">
                {responseData.map((item, index) => (
                    <div key={index} className="col-12 col-md-4 md-2">
                        <div className="card my-3">
                            <div align="center" className="mt-2">
                                <Avatar
                                    src={"http://localhost:9090/images/"+item.photo}
                                    sx={{ width: 150, height: 150 }}
                                    style={{
                                        border: '4px solid rgba(251, 232, 166, 1) '
                                     }}
                                />
                            </div>
                            <div className="card-body mb-2" align="center">
                                <Link
                                    to="/admin/details/card"
                                    id={item.empno}
                                    value={item.empno}
                                    state={item}
                                >
                                    <h5>{item.ename}</h5>
                                </Link>{" "}

                                <div className="row m-2">
                                    <div className="col-7 float-right">
                                        <b className="float-left">Emp. No.: </b><span className="float-left">{item.empno}</span>
                                    </div>
                                    <div className="col-5">
                                        <b>DEPT:</b><span>{item.deptno}</span>
                                    </div>
                                </div>
                                <div className="row m-2">
                                    <div className="col-12">
                                        <b className="float-left">EMAIL: </b><span className="float-left">{item.email}</span>
                                    </div>
                                </div>
                                <div className="row m-2">
                                    <div className="col-6 ">
                                        <b className="float-left">CITY: </b><span className="float-left">{item.city}</span>
                                    </div>
                                    <div className="col-6 ">
                                        <span>
                                        <Link
                                            to="/employee/update"
                                            state={item}
                                            className="btn icon float-right"
                                            style={{backgroundColor:"white"}}
                                        >
                                            <GrEdit style={{color:"rgba(48, 60, 108, 1) ", fontSize: "1em"}}/>
                                        </Link>
                                        </span>
                                        <span>
                                            <button
                                                type="button"
                                                id={item.empno}
                                                value={item.empno}
                                                className="btn icon float-right"
                                                onClick={EmployeeDelete}
                                                style={{backgroundColor:"white"}}
                                            >
                                                <IoTrashSharp style={{color:"rgba(48, 60, 108, 1) ", fontSize: "1em"}}/>
                                            </button>{" "}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default EmpCard;