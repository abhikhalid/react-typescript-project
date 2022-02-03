import React from "react";

import "./Skills.css";

const Skills = () => {

  let skills: string[] = [];

  skills.push('CSS','REACT','HTML','LARAVEL','JAVASCRIPT','SQL');




  return (
    <div className="skillContainer">
      <h1>SKILLS</h1>

      <div className="skillPair">
        <div className="singleSkill">
          <h3>{skills[0]}</h3>
        </div>

        <div className="singleSkill">
          <h3>{skills[1]}</h3>
        </div>
      </div>

      <div className="skillPair">
        <div className="singleSkill">
          <h3>{skills[2]}</h3>
        </div>

        <div className="singleSkill">
          <h3>{skills[3]}</h3>
        </div>
      </div>

      <div className="skillPair">
        <div className="singleSkill">
          <h3>{skills[4]}</h3>
        </div>

        <div className="singleSkill">
          <h3>{skills[5]}</h3>
        </div>
      </div>

      <footer className="aboutMeFooter">
        04/10 NEXT CHAPTER <span className="arrow"> &#x2935; </span>
      </footer>
    </div>
  );
};

export default Skills;
