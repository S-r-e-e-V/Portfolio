import React from "react";
import "./Home.css";

import { ProfileInfo } from "../../constants/Portfolio";

export default function Home() {
  return (
    <div className="home">
      <div className="greeting">Hi There!</div>
      <div className="profile-name">
        I'M <span className="name">{ProfileInfo.name}</span>
      </div>
      <div className="about-me">{ProfileInfo.aboutMe}</div>
      <div className="about-me-btn">About me</div>
    </div>
  );
}
