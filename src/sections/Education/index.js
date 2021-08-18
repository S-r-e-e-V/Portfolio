import React from "react";
import "./Education.css";

import Heading from "../../components/Heading";

import { Education as Edu } from "../../constants/Portfolio";

export default function Education() {
  return (
    <div className="education">
      <Heading
        heading={
          <div>
            My <span>Education</span>
          </div>
        }
      />
      <div className="details">
        {Edu.map((item, index) => (
          <div key={index}>
            <div>{`${item.start} - ${item.end}`}</div>
            <div className="qualification">{item.title}</div>
            <div>{item.from}</div>
            <div>{item.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
