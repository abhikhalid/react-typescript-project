import React from "react";

import "./AboutMe.css";

const AboutMe = () => {
  let aboutMe: string[] = [];

  aboutMe.push(`I'm freelance webdeveloper lorem ipsum dolor sit amet, consetetur
  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
  dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
  justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
  takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
  amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
  invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
  vero eos et accusam et justo duo dolores et ea rebum.`);

  aboutMe.push(` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
  amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
  nonumy eirmod tempor invidunt ut labore et dolore magna.`);

  aboutMe.push(`  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
  amet.`);

  return (
    <div className="aboutMeContainer">
      <h1 className="aboutMeTitle">ABOUT ME</h1>

      <p className="aboutMepara">{aboutMe[0]}</p>

      <p className="aboutMepara">{aboutMe[1]}</p>

      <p className="aboutMepara">{aboutMe[2]}</p>

      <footer className="aboutMeFooter">
        02/10 NEXT CHAPTER <span className="arrow"> &#x2935; </span>
      </footer>
    </div>
  );
};

export default AboutMe;
