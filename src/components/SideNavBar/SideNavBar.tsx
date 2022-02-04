import React from "react";

import "./SideNavBar.css";

import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <div className="sideNavBarContainer">
      <nav className="navbar">
        <Link
          to="/"
          style={{
            fontStyle: "bold",
            fontSize: "13px",
            textDecoration: "none !important",
            color: "inherit",
            all: "unset",
            cursor: "pointer",
          }}
        >
          <p>01 TOP</p>
        </Link>

        <Link
          to="/intro"
          style={{
            fontStyle: "bold",
            fontSize: "13px",
            textDecoration: "none !important",
            color: "inherit",
            all: "unset",
            cursor: "pointer",
          }}
        >
          <p>02 ABOUT ME</p>
        </Link>

        <Link
          to="/myservices"
          style={{
            fontStyle: "bold",
            fontSize: "13px",
            textDecoration: "none !important",
            color: "inherit",
            all: "unset",
            cursor: "pointer",
          }}
        >
          <p>03 MY SERVICES</p>
        </Link>

        <Link
          to="/skills"
          style={{
            fontStyle: "bold",
            fontSize: "13px",
            textDecoration: "none !important",
            color: "inherit",
            all: "unset",
            cursor: "pointer",
          }}
        >
          <p>04 SKILLS</p>
        </Link>

        <Link
          to="/facts"
          style={{
            fontStyle: "bold",
            fontSize: "13px",
            textDecoration: "none !important",
            color: "inherit",
            all: "unset",
            cursor: "pointer",
          }}
        >
          <p>05 FACTS</p>
        </Link>

        <Link
          to="/experiences"
          style={{
            fontStyle: "bold",
            fontSize: "13px",
            textDecoration: "none !important",
            color: "inherit",
            all: "unset",
            cursor: "pointer",
          }}
        >
          <p>06 EXPERIENCES</p>
        </Link>

        <Link
          to="/projects"
          style={{
            fontStyle: "bold",
            fontSize: "13px",
            textDecoration: "none !important",
            color: "inherit",
            all: "unset",
            cursor: "pointer",
          }}
        >
          <p>08 PROJECTS</p>
        </Link>

        <Link
          to="/contact"
          style={{
            fontStyle: "bold",
            fontSize: "13px",
            textDecoration: "none !important",
            color: "inherit",
            all: "unset",
            cursor: "pointer",
          }}
        >
          <p>10 CONTACT</p>
        </Link>

        <p>
          khalid.mamud@bjitgroup.com <br /> +420 652 887 351
        </p>
      </nav>
    </div>
  );
};

export default SideNavBar;
