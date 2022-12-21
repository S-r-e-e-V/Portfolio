import React from "react";
import "./Projects.css";

import Heading from "../../components/Heading";

import Profile from "../../constants/Portfolio";
export default function Projects() {
  return (
    <div className="projects">
      <Heading
        heading={
          <div>
            My <span>Projects</span>
          </div>
        }
      />
      <div className="details">
        {Profile.projects.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (item.link) window.open(item.link, "_blank");
            }}
          >
            <div className="date">{item.date}</div>
            <div className="title">{item.title}</div>
            <div className="content">{item.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
