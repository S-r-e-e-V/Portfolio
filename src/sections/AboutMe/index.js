import React from "react";
import "./AboutMe.css";

import Profile from "../../constants/Portfolio";
import Heading from "../../components/Heading";

export default function AboutMe() {
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

          <div className="languages">
            Languages :{" "}
            <span className="content">
              {Profile.languageSkills.motherTongue} (Mother Tongue),
              {Profile.languageSkills.otherLanguages.join(",")}
            </span>
          </div>
          {/* <a href="/src/constants/Sreekanth V_CV.pdf" download>
            Download CV
          </a> */}
        </div>
        <div className="section2">
          <div className="boxes">
            <div className="projects">
              <span className="content">{Profile.projects.length}</span>{" "}
              Projects Completed
            </div>
            <div className="awards">
              <span className="content">{Profile.awards.length}</span>
              {Profile.awards.length > 1 ? " Awards Won" : " Award Won"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
