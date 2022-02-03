import React from "react";

import "./Experiences.css";

const Experiences = () => {
  type experieces = {
    timestamp: string;
    companyName: string;
    designation: string;
  };

  let myExperience: experieces[] = [];

  myExperience.push(
    {
      timestamp: "2021 August- 2021 October",
      companyName: "BJIT",
      designation: "Trainee Software Engineer",
    },
    {
      timestamp: "2021 November - now",
      companyName: "BJIT",
      designation: "Software Engineer",
    }
  );

  return (
    <div className="experiencesContainer">
      <h1>EXPERIENCES</h1>

      <div className="experienceContainer">
        <div className="singleExperience">
          <p>{myExperience[0].timestamp}</p>

          <h1>{myExperience[0].companyName}</h1>

          <p>{myExperience[0].designation}</p>
        </div>
        <div className="singleExperience">
          <p>{myExperience[1].timestamp}</p>

          <h1>{myExperience[1].companyName}</h1>

          <p>{myExperience[1].designation}</p>
        </div>

      
      </div>

      <footer className="aboutMeFooter">
        06/10 NEXT CHAPTER <span className="arrow"> &#x2935; </span>
      </footer>
    </div>
  );
};

export default Experiences;
