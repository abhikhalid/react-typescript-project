import React from "react";

import "./SideNavBar.css";

import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <div className="sideNavBarContainer">
      <nav className="navbar">
        <Link to="/">
          <p style={{ fontStyle: "bold", fontSize: "13px" }}>01 TOP</p>
        </Link>

        <Link to="/intro">
          <p style={{ fontStyle: "bold", fontSize: "13px" }}>02 ABOUT ME</p>
        </Link>

        <Link to="/myservices">
          <p style={{ fontStyle: "bold", fontSize: "13px" }}>03 MY SERVICES</p>
        </Link>

        <Link to="/skills">
          <p style={{ fontStyle: "bold", fontSize: "13px" }}>04 SKILLS</p>
        </Link>

        <Link to="/facts">
          <p style={{ fontStyle: "bold", fontSize: "13px" }}>05 FACTS</p>
        </Link>

        <Link to="/experiences">
          <p style={{ fontStyle: "bold", fontSize: "13px" }}>06 EXPERIENCES</p>
        </Link>

        <Link to="/projects">
          <p style={{ fontStyle: "bold", fontSize: "13px" }}>08 PROJECTS</p>
        </Link>

        <Link to="/contact">
          <p style={{ fontStyle: "bold", fontSize: "13px" }}>10 CONTACT</p>
        </Link>

        

        <p>
          khalid.mamud@bjitgroup.com <br /> +420 652 887 351
        </p>
      </nav>
    </div>
  );
};

export default SideNavBar;
