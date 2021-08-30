import React, { useState, useRef, useEffect, forwardRef } from "react";
import "./SideNav.css";

import Profile from "../../constants/Portfolio";

import Images from "../../assets";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";

import { Link, animateScroll as scroll } from "react-scroll";

const SideNav = () => {
  const node = useRef();
  const [isOpen, setisOpen] = useState(false);
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
  // dark mode 🌗
  const darkMode = () => {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "dark-theme") {
        localStorage.setItem("theme", "light-theme");
        document.documentElement.className = "light-theme";
      } else if (localStorage.getItem("theme") === "light-theme") {
        localStorage.setItem("theme", "dark-theme");
        document.documentElement.className = "dark-theme";
      }
    } else {
      localStorage.setItem("theme", "dark-theme");
      document.documentElement.className = "dark-theme";
    }
    // document.body.classList.toggle("dark-theme");
  };

  return (
    <>
      <div className={`sidenav ${isOpen ? "active" : "hide"}`} ref={node}>
        <BsMoon className="dark-mode" onClick={darkMode} />
        <div className="profile-pic">
          <img src={Images.profilePic} />
        </div>
        <div className="name">Sreekanth V</div>
        <div className="designation">Software Developer</div>
        <div className="section-btns">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Work Experience</a>
          <a href="#education">Education</a>
          <a href="#project">Projects</a>
          <a href="#publication">Publications</a>
          <a href="#award">Awards</a>
        </div>
        {isOpen ? (
          <AiOutlineClose
            className="menu-icon"
            onClick={() => setisOpen(!isOpen)}
          />
        ) : (
          <BiMenu className="menu-icon" onClick={() => setisOpen(!isOpen)} />
        )}
        <div className="social-login">
          <img
            src={Images.insta}
            onClick={() => window.open(Profile.profileInfo.instagram)}
          />
          {/* <img src={Images.fb}/> */}
          {/* <img src={Images.twitter}/> */}
          <img
            src={Images.linkedIn}
            onClick={() => window.open(Profile.profileInfo.linkedIn)}
          />
        </div>
      </div>
      <div className={`dim-background ${isOpen ? "active" : "hide"}`}></div>
    </>
  );
};
export default SideNav;
