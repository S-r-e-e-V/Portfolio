import React from "react";
import "./LandingPage.css";

import SideNav from "../../components/SideNav";
import Home from "../../sections/Home";
import AboutMe from "../../sections/AboutMe";
import Education from "../../sections/Education";
import Experience from "../../sections/Experience";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <SideNav />
      <div className="sections">
        <Home />
        <AboutMe />
        <Education />
        <Experience />
      </div>
    </div>
  );
}
