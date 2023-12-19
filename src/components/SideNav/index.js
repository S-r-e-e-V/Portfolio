import React, { useState, useRef, useEffect, forwardRef } from "react";
import "./SideNav.css";

import Profile from "../../constants/Portfolio";

import Images from "../../assets";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const node = useRef();
  const navigator = useNavigate();
  const [isOpen, setisOpen] = useState(false);
  const [darkTheme, setdarkTheme] = useState(true);
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
        setdarkTheme(false);
        document.documentElement.className = "light-theme";
      } else if (localStorage.getItem("theme") === "light-theme") {
        localStorage.setItem("theme", "dark-theme");
        document.documentElement.className = "dark-theme";
        setdarkTheme(true);
      }
    } else {
      localStorage.setItem("theme", "light-theme");
      document.documentElement.className = "light-theme";
      setdarkTheme(false);
    }
  };
  console.log(localStorage.getItem("theme"));
  return (
    <>
      <div className={`sidenav ${isOpen ? "active" : "hide"}`} ref={node}>
        {darkTheme ? (
          <MdWbSunny className="dark-mode" onClick={darkMode} />
        ) : (
          <BsMoon className="dark-mode" onClick={darkMode} />
        )}
        <div className="profile-pic">
          <img src={Images.profilePic} />
        </div>
        <div className="name">Sreekanth V</div>
        <div className="designation">Software Engineer</div>
        <div className="section-btns">
          <span onClick={() => navigator("/home")}>Home</span>
          <span onClick={() => navigator("/about")}>About</span>
          <span onClick={() => navigator("/experience")}>Work Experience</span>
          <span onClick={() => navigator("/education")}>Education</span>
          <span onClick={() => navigator("/projects")}>Projects</span>
          <span onClick={() => navigator("/publications")}>Publications</span>
          <span onClick={() => navigator("/awards")}>Awards</span>
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
