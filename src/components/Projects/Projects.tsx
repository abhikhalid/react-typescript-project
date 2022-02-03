import React from "react";

import "./Projects.css";

import project1 from "../../../src/project_1.jpg";
import project2 from "../../../src/project_2.jpg";
import project3 from "../../../src/project_3.jpg";

const Projects = () => {
  type projects = {
    companyName: string;
    projectName: string;
    role: string;
  };

  let myProjects: projects[] = [];

  myProjects.push(
    {
      companyName: "Nanovo",
      projectName: "Design e-sho",
      role: "FRONTEND -BACKEND",
    },
    {
      companyName: "Bbop",
      projectName: "Social Network for Musicians",
      role: "DESIGN -FRONTEND - BACKEND",
    },
    {
      companyName: "Janja Prokic",
      projectName: "Jewelry e-shop",
      role: "FRONTEND - BACKEND",
    }
  );

  return (
    <div className="projectsContainer">
      <h1>PROJECTS</h1>

      <div className="projectsRow">
        <div className="singleProject">
          <img src={project1} alt="" />

          <h1>{myProjects[0].companyName}</h1>

          <p>{myProjects[0].projectName}</p>

          <h6>{myProjects[0].role}</h6>
        </div>

        <div className="singleProject">
          <img src={project2} alt="" />

          <h1>{myProjects[1].companyName}</h1>

          <p>{myProjects[1].projectName}</p>

          <h6>{myProjects[1].role}</h6>
        </div>

        <div className="singleProject">
          <img src={project3} alt="" />

          <h1>{myProjects[2].companyName}</h1>

          <p>{myProjects[2].projectName}</p>

          <h6>{myProjects[2].role}</h6>
        </div>
      </div>

      <footer className="aboutMeFooter">
        08/10 NEXT CHAPTER <span className="arrow"> &#x2935; </span>
      </footer>
    </div>
  );
};

export default Projects;
