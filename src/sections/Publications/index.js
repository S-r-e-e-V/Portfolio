import "./Publications.css";

import React from "react";

import Heading from "../../components/Heading";
import Profile from "../../constants/Portfolio";

import { Tooltip } from "react-tooltip";

export default function Publications() {
  const link = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="publications">
      <Heading
        heading={
          <div>
            <span>Publications</span>
          </div>
        }
      />
      <div className="details">
        {Profile.publications.map((item, index) => (
          <div
            key={index}
            onClick={() => link(item.link)}
            data-tooltip-content="Click to view published paper"
            data-tooltip-id="toolTip1"
          >
            <div className="date">{item.date}</div>
            <div className="title">{item.title}</div>
            <div className="content">{item.details}</div>
          </div>
        ))}
      </div>
      <Tooltip id="toolTip1" />
    </div>
  );
}
