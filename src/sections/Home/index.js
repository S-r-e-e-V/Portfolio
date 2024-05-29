import React from "react";
import "./Home.css";

import Profile from "../../constants/Portfolio";

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="greeting">Hi There!</div>
      <div className="profile-name">
        I'M <span className="name">{Profile.profileInfo.name}</span>
      </div>
      <div className="about-me">{Profile.profileInfo.aboutMe}</div>
      {/* <span className="about-me-btn">About me</span> */}
    </div>
  );
}
