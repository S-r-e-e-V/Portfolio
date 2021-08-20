import React from "react";
import "./AboutMe.css";

import {
  ProfileInfo,
  workExperience,
  Projects,
  Awards,
  LanguageSkills,
} from "../../constants/Portfolio";
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
            Name : <span className="content">{ProfileInfo.name}</span>
          </div>
          <div className="dob">
            Date of Birth : <span className="content">{ProfileInfo.dob}</span>
          </div>
          <div className="designation">
            Designation :{" "}
            <span className="content">{workExperience[0].designation}</span>
          </div>

          <div className="languages">
            Languages :{" "}
            <span className="content">
              {LanguageSkills.motherTongue} (Mother Tongue),
              {LanguageSkills.otherLanguages.join(",")}
            </span>
          </div>
          <a href="/src/constants/Sreekanth V_CV.pdf" download>
            Download CV
          </a>
        </div>
        <div className="section2">
          <div className="boxes">
            <div className="projects">
              <span className="content">{Projects.length}</span> Projects
              Completed
            </div>
            <div className="awards">
              <span className="content">{Awards.length}</span>
              {Awards.length > 1 ? " Awards Won" : " Award Won"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
