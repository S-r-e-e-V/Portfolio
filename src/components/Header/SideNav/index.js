import React, { useState, useRef, useEffect } from "react";
import "./SideNav.css";

import Profile from "../../../constants/Portfolio";
import Images from "../../../assets";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const SideNav = () => {
  const node = useRef();
  // const navigator = useNavigate();
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
  const redirect = (url) => {
    const section = document.getElementById(url);
    const headerHeight = document.querySelector(".top-nav").offsetHeight; // Get the height of the fixed header
    if (section) {
      const topPosition = section.offsetTop - headerHeight; // Adjust scroll position by subtracting header height
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
    setisOpen(false);
  };
  return (
    <>
      <div className={`sidenav ${isOpen ? "active" : "hide"}`} ref={node}>
        {darkTheme ? (
          <span className="dark-mode">
            <MdWbSunny size={20} onClick={darkMode} />
          </span>
        ) : (
          <span className="dark-mode">
            <BsMoon size={20} onClick={darkMode} />
          </span>
        )}
        <div className="profile-pic">
          <img src={Images.profilePic} />
        </div>
        <div className="name">Sreekanth V</div>
        <div className="designation">Software Engineer</div>
        <div className="section-btns">
          <span onClick={() => redirect("/home")}>Home</span>
          <span onClick={() => redirect("/about")}>About</span>
          <span onClick={() => redirect("/experience")}>Experience</span>
          <span onClick={() => redirect("/education")}>Education</span>
          <span onClick={() => redirect("/projects")}>Projects</span>
          <span onClick={() => redirect("/publications")}>Publications</span>
          <span onClick={() => redirect("/awards")}>Awards</span>
        </div>
        {isOpen ? (
          <span className="menu-icon">
            <AiOutlineClose size={20} onClick={() => setisOpen(!isOpen)} />
          </span>
        ) : (
          <span className="menu-icon">
            <BiMenu size={20} onClick={() => setisOpen(!isOpen)} />
          </span>
        )}
        <div className="social-login">
          <span className="social-media-icon instagram">
            <FaInstagram
              size={25}
              onClick={() => window.open(Profile.profileInfo.instagram)}
            />
          </span>
          <span className="social-media-icon linkedin">
            <FaLinkedinIn
              size={25}
              onClick={() => window.open(Profile.profileInfo.linkedIn)}
            />
          </span>
        </div>
      </div>
      <div className={`dim-background ${isOpen ? "active" : "hide"}`}></div>
    </>
  );
};
export default SideNav;
