import React from "react";
import "./SideNav.css";

import Images from "../../assets";

export default function SideNav() {
  return (
    <div className="sidenav">
      <div className="profile-pic">
        <img src={Images.profilePic} />
      </div>
      <div className="name">Sreekanth V</div>
      <div className="designation">Software Developer</div>
      <div className="section-btns">
        <div>Home</div>
        <div>About</div>
        <div>Education</div>
        <div>Portfolio</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
