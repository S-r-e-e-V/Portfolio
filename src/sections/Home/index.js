import React from "react";
import "./Home.css";

import Profile from "../../constants/Portfolio";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigator = useNavigate();
  return (
    <div className="home">
      <div className="greeting">Hi There!</div>
      <div className="profile-name">
        I'M <span className="name">{Profile.profileInfo.name}</span>
      </div>
      <div className="about-me">{Profile.profileInfo.aboutMe}</div>
      <span onClick={() => navigator("/about")} className="about-me-btn">
        About me
      </span>
    </div>
  );
}
