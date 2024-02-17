import React from "react";
import "./Projects.css";

import Heading from "../../components/Heading";

import Profile from "../../constants/Portfolio";
export default function Projects() {
  const link = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="projects" id="projects">
      <Heading
        heading={
          <div>
            My <span>Projects</span>
          </div>
        }
      />
      <div className="details">
        {Profile.projects.map((item, index) => (
          <div key={index} onClick={() => (item.link ? link(item.link) : "")}>
            <div className="date">{item.date}</div>
            <div className="title">{item.title}</div>
            <div className="content">{item.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
