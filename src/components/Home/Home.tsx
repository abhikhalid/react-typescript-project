import React from "react";
import AboutMe from "../About/AboutMe";
import Contact from "../Contact/Contact";
import Experiences from "../Experiences/Experiences";
import Facts from "../Facts/Facts";
import Intro from "../Intro/Intro";
import LeaveMessage from "../LeaveMessage/LeaveMessage";
import MyServices from "../MyServices/MyServices";
import Projects from "../Projects/Projects";
import SideNavBar from "../SideNavBar/SideNavBar";
import Skills from "../Skills/Skills";

import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="leftCorner">
          <Intro />

          <AboutMe />

          <MyServices />

          <Skills />

          <Facts />

          <Experiences />

          {/* <References/> */}

          <Projects />

          {/* <Testimonial/> */}

          <Contact />

          <LeaveMessage />
        </div>

        <div className="rightCorner">
          <SideNavBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
