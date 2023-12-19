import React from "react";
import "./AboutMe.css";

import Profile from "../../constants/Portfolio";
import Heading from "../../components/Heading";
import { useNavigate } from "react-router-dom";

export default function AboutMe() {
  const navigator = useNavigate();
  return (
    <div className="aboutme">
      <Heading
        heading={
          <div>
            <span>About</span> me
          </div>
        }
      />
      <div className="details">
        <div className="section1">
          <div className="name">
            Name : <span className="content">{Profile.profileInfo.name}</span>
          </div>
          <div className="dob">
            Date of Birth :{" "}
            <span className="content">{Profile.profileInfo.dob}</span>
          </div>
          <div className="designation">
            Designation :{" "}
            <span className="content">
              {Profile.workExperience[0].designation}
            </span>
          </div>

          {/* <div className="languages">
            Languages :{" "}
            <span className="content">
              {Profile.languageSkills.motherTongue} (Mother Tongue),
              {Profile.languageSkills.otherLanguages.join(",")}
            </span>
          </div> */}
          <a href={process.env.PUBLIC_URL + "CV.pdf"} download="CV">
            Download CV
          </a>
        </div>
        <div className="section2">
          <div className="boxes">
            <span onClick={() => navigator("/projects")} className="projects">
              <span className="content">{Profile.projects.length}</span>
              Projects Completed
            </span>
            <span onClick={() => navigator("/awards")} className="awards">
              <span className="content">{Profile.awards.length}</span>
              {Profile.awards.length > 1 ? " Awards Won" : " Award Won"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
