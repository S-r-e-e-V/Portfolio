import React from "react";
import "./LandingPage.css";

// import Router from "../../routes/routes";
import AboutMe from "../../sections/AboutMe";
import Home from "../../sections/Home";
import Experience from "../../sections/Experience";
import Education from "../../sections/Education";
import Projects from "../../sections/Projects";
import Publications from "../../sections/Publications";
import Awards from "../../sections/Awards";
import Header from "../../components/Header";

export default function LandingPage() {
  // return <Router />;
  return (
    <div className="main">
      <Header />
      <div className="landing-section">
        <Home />
        <AboutMe />
        <Experience />
        <Education />
        <Projects />
        <Publications />
        <Awards />
      </div>
    </div>
  );
}
