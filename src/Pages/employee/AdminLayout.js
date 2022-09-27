import { Link, Outlet } from "react-router-dom";
import React from "react";
import NavbarAdmin from "../../Componant/NavbarAdmin"
import "../../Style/header.css"
import { BsBoxArrowRight } from "react-icons/bs";



function AdminLayout() {
  return (
    <>
     <div className="row sticky-wrapper">
        <div className="col-12 sticky">
          <div className="row" >
            <div className="col-2">
              <img
                src={require("../../Assets/images/home/logo_no_name.png")}
                width="72"
                className="d-inline-block align-top mx-5"
                alt="MUMS logo"
              />
            </div>
            <div className="col-2"></div>
              <h2 className="my-auto">Welcome back  </h2>
              {/* <div className="row" >
                <div className="col-12">   
                  <BsBoxArrowRight size={40}/>
                  <h6>Log Out</h6>
                </div>
              </div>               */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <NavbarAdmin/>
        </div>
        <div class="col-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default AdminLayout;
