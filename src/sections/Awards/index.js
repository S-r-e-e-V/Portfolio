import React from "react";
import "./Awards.css";

import Heading from "../../components/Heading";

import { Awards as awards } from "../../constants/Portfolio";
export default function Awards() {
  return (
    <div className="awards">
      <Heading
        heading={
          <div>
            <span>Awards</span>
          </div>
        }
      />
      <div className="details">
        {awards.map((item, index) => (
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
