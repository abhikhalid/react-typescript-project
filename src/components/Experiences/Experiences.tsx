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
      timestamp: "2018 - now",
      companyName: "Freelance",
      designation: "Full stack web developer",
    },
    {
      timestamp: "2015 - 2018",
      companyName: "Facebook",
      designation: "Senior front-end coder, team leader",
    },
    {
      timestamp: "2013 - 2015",
      companyName: "Amazon",
      designation: "Junior front-end coder",
    },
    {
      timestamp: "2007 - 2013",
      companyName: "MIT",
      designation: "Computer Science & Artifical Intelligence Lab",
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

        <div className="singleExperience">
          <p>{myExperience[2].timestamp}</p>

          <h1>{myExperience[2].companyName}</h1>

          <p>{myExperience[2].designation}</p>
        </div>

        <div className="singleExperience">
          <p>{myExperience[3].timestamp}</p>

          <h1>{myExperience[3].companyName}</h1>

          <p>{myExperience[3].designation}</p>
        </div>
      </div>

      <footer className="aboutMeFooter">
        06/10 NEXT CHAPTER <span className="arrow"> &#x2935; </span>
      </footer>
    </div>
  );
};

export default Experiences;
