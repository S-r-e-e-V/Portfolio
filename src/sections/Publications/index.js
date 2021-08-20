import "./Publications.css";

import React from "react";

import Heading from "../../components/Heading";
import { Publications as publication } from "../../constants/Portfolio";

import ReactTooltip from "react-tooltip";
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
        {publication.map((item, index) => (
          <div
            key={index}
            onClick={() => link(item.link)}
            data-tip="Click to view published paper"
            data-for="toolTip1"
            data-place="right"
          >
            <div className="date">{item.date}</div>
            <div className="title">{item.title}</div>
            <div className="content">{item.details}</div>
          </div>
        ))}
      </div>
      <ReactTooltip id="toolTip1" />
    </div>
  );
}
