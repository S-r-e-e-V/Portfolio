import React from "react";
import "./Experience.css";

import Heading from "../../components/Heading";

import { workExperience } from "../../constants/Portfolio";
export default function Experience() {
  return (
    <div className="experience">
      <Heading
        heading={
          <div>
            Work <span>Experience</span>
          </div>
        }
      />
      <div className="details">
        {workExperience.map((item, index) => (
          <div key={index}>
            <div>{`${item.start} - ${item.end}`}</div>
            <div className="designation">{item.designation}</div>
            <div>{item.company}</div>
            <div>{item.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
