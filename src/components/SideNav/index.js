import React, { useState, useRef, useEffect } from "react";
import "./SideNav.css";

import Images from "../../assets";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function SideNav() {
  const node = useRef();
  const [isOpen, setisOpen] = useState(false);
  const toggleSidenav = () => {
    setisOpen(!isOpen);
  };
  console.log(isOpen);
  useEffect(() => {
    window.addEventListener("resize", viewPort);
    return () => window.removeEventListener("resize", viewPort);
  }, []);
  const viewPort = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  const handleClick = (e) => {
    if (!node.current.contains(e.target)) {
      setisOpen(false);
      return;
    }
  };
  return (
    <>
      <div className={`sidenav ${isOpen ? "active" : "hide"}`} ref={node}>
        <div className="profile-pic">
          <img src={Images.profilePic} />
        </div>
        <div className="name">Sreekanth V</div>
        <div className="designation">Software Developer</div>
        <div className="section-btns">
          <div>Home</div>

          <a href="#about">
            <div>About</div>
          </a>
          <div>Work Experience</div>
          <div>Education</div>
          <div>Projects</div>
          <div>Publications</div>
          <div>Awards</div>
        </div>
        {isOpen ? (
          <AiOutlineClose
            className="menu-icon"
            onClick={() => setisOpen(!isOpen)}
          />
        ) : (
          <BiMenu className="menu-icon" onClick={() => setisOpen(!isOpen)} />
        )}
      </div>
      <div className={`dim-background ${isOpen ? "active" : "hide"}`}></div>
    </>
  );
}
