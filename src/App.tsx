import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AboutMe from "./components/About/AboutMe";
import Contact from "./components/Contact/Contact";
import Experiences from "./components/Experiences/Experiences";
import Facts from "./components/Facts/Facts";
import Home from "./components/Home/Home";
import Intro from "./components/Intro/Intro";
import LeaveMessage from "./components/LeaveMessage/LeaveMessage";
import MyServices from "./components/MyServices/MyServices";
import Projects from "./components/Projects/Projects";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Router>
        <div>
          {/* <SideNavBar /> */}

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/intro">
              <Intro />
            </Route>
            <Route path="/intro">
              <AboutMe />
            </Route>

            <Route path="/myservices">
              <MyServices />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/facts">
              <Facts />
            </Route>
            <Route path="/experiences">
              <Experiences />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/leaveamessage">
              <LeaveMessage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
