import React from "react";

import "./App.css";
import AboutMe from "./components/About/AboutMe";
import Contact from "./components/Contact/Contact";
import Experiences from "./components/Experiences/Experiences";
import Facts from "./components/Facts/Facts";
import Intro from "./components/Intro/Intro";
import LeaveMessage from "./components/LeaveMessage/LeaveMessage";
import MyServices from "./components/MyServices/MyServices";
import Projects from "./components/Projects/Projects";
import References from "./components/References/References";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Skills from "./components/Skills/Skills";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="leftCorner">
          
          <Intro/>

          <AboutMe/>

          <MyServices/>

          <Skills/>

          <Facts/>

          <Experiences/>

          {/* <References/> */}

          <Projects/>

          {/* <Testimonial/> */}

          <Contact/>

          <LeaveMessage/>

        
        </div>

        <div className="rightCorner">
           
           <SideNavBar/>


        </div>

      </div>
    </div>
  );
}

export default App;
