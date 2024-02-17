import React from "react";
import "./Education.css";

import Heading from "../../components/Heading";
import Profile from "../../constants/Portfolio";

import { FaGraduationCap } from "react-icons/fa";
export default function Education() {
  return (
    <div className="education" id="education">
      <Heading
        heading={
          <div>
            My <span>Education</span>
          </div>
        }
      />
      <div className="details">
        {Profile.education.map((item, index) => (
          <div key={index}>
            <div className="symbol">
              <span className="circle">
                <FaGraduationCap className="icon" />
              </span>
              <span className="line"></span>
            </div>
            <div className="content">
              <div className="date">
                {item.start} {item.end ? `- ${item.end}` : ""}
              </div>
              <div className="title">{item.title}</div>
              <div>
                Institution : <span>{item.from}</span>
              </div>
              <div>
                Location : <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
