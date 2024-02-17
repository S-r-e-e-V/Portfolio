import React from "react";
import "./Awards.css";

import Heading from "../../components/Heading";

import Profile from "../../constants/Portfolio";
export default function Awards() {
  return (
    <div className="awards" id="awards">
      <Heading
        heading={
          <div>
            <span>Awards</span>
          </div>
        }
      />
      <div className="details">
        {Profile.awards.map((item, index) => (
          <div key={index}>
            <div className="date">{item.date}</div>
            <div className="title">{item.title}</div>
            <div className="content">{item.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
