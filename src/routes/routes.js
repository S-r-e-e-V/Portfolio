import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// screens
import AboutMe from "../sections/AboutMe";
import SideNav from "../components/SideNav";
import Home from "../sections/Home";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Publications from "../sections/Publications";
import Awards from "../sections/Awards";

function Router() {
  return (
    <BrowserRouter>
      <div className="main">
        <SideNav />
        <div className="landing-section">
          <Routes>
            <Route exact path="/awards" element={<Awards />} />
            <Route exact path="/publication" element={<Publications />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/about" element={<AboutMe />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default Router;
