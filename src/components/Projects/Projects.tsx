import React from "react";

import "./Projects.css";

import project1 from "../../../src/project_1.jpg";
import project2 from "../../../src/project_2.jpg";
import project3 from "../../../src/project_3.jpg";

import movieStreamingApp from '../../../src/movieStreamingApp.jpg'

const Projects = () => {
  type projects = {
    companyName: string;
    projectName: string;
    role: string;
  };

  let myProjects: projects[] = [];

  myProjects.push(
    {
      companyName: "BJIT",
      projectName: "Movie Streaing App",
      role: "FRONTEND -BACKEND, BACKEND, DATABASE",
    }
    
  );

  return (
    <div className="projectsContainer">
      <h1>PROJECTS</h1>

      <div className="projectsRow">
        <div className="singleProject">
          <img src={movieStreamingApp} alt="" />

          <h1>{myProjects[0].companyName}</h1>

          <p>{myProjects[0].projectName}</p>

          <h6>{myProjects[0].role}</h6>
        </div>

     
      </div>

      <footer className="aboutMeFooter">
        08/10 NEXT CHAPTER <span className="arrow"> &#x2935; </span>
      </footer>
    </div>
  );
};

export default Projects;
