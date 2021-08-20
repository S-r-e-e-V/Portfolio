import React, { useRef } from "react";
import "./LandingPage.css";

import SideNav from "../../components/SideNav";
import Home from "../../sections/Home";
import AboutMe from "../../sections/AboutMe";
import Education from "../../sections/Education";
import Experience from "../../sections/Experience";
import Projects from "../../sections/Projects";
import Awards from "../../sections/Awards";
import Publications from "../../sections/Publications";

import { Element, Link, animateScroll as scroll } from "react-scroll";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <SideNav />
      <div className="sections">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="project">
          <Projects />
        </div>
        <div id="award">
          <Awards />
        </div>
        <div id="publication">
          <Publications />
        </div>
      </div>
    </div>
  );
}
