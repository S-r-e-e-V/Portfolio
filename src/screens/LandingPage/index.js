import React from "react";
import "./LandingPage.css";

import SideNav from "../../components/SideNav";
import Home from "../../sections/Home";
import AboutMe from "../../sections/AboutMe";
import Education from "../../sections/Education";
import Experience from "../../sections/Experience";
import Projects from "../../sections/Projects";
import Awards from "../../sections/Awards";
import Publications from "../../sections/Publications";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <SideNav />
      <div className="sections">
        <Home />
        <div id="about">
          <AboutMe />
        </div>
        <Experience />
        <Education />
        <Projects />
        <Awards />
        <Publications />
      </div>
    </div>
  );
}
