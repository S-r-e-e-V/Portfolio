import React from "react";
import "./Experience.css";

import Heading from "../../components/Heading";
import Profile from "../../constants/Portfolio";

import { MdWork } from "react-icons/md";
export default function Experience() {
  return (
    <div className="experience" id="experience">
      <Heading
        heading={
          <div>
            Work <span>Experience</span>
          </div>
        }
      />
      <div className="details">
        {Profile.workExperience.map((item, index) => (
          <div key={index}>
            <div className="symbol">
              <span className="circle">
                <MdWork className="icon" />
              </span>
              <span className="line"></span>
            </div>
            <div className="content">
              <div className="date">
                {item.start} {item.end ? `- ${item.end}` : ""}
              </div>
              <div className="title">{item.designation}</div>
              <div>
                Company : <span>{item.company}</span>
              </div>
              <div>
                Location : <span>{item.location}</span>
              </div>
              <div>
                Details :<span> {item.details}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
