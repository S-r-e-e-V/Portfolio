import React, { useState, useEffect } from "react";
import "./TopNav.css";
import Profile from "../../../constants/Portfolio";
import Image from "../../../assets";
import { BsMoon } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function TopNav() {
  const [darkTheme, setdarkTheme] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  };
  return (
    <div className={`top-nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="img-section">
        <img src={Image.profilePic} className="profile-pic" />
      </div>
      <div className="title-section">
        <span onClick={() => redirect("home")}>Home</span>
        <span onClick={() => redirect("about")}>About</span>
        <span onClick={() => redirect("experience")}>Experience</span>
        <span onClick={() => redirect("education")}>Education</span>
        <span onClick={() => redirect("projects")}>Projects</span>
        <span onClick={() => redirect("publications")}>Publications</span>
        <span onClick={() => redirect("awards")}>Awards</span>
      </div>
      <div className="icons-section">
        <span className="social-media-icon instagram">
          <FaInstagram
            size={16}
            onClick={() => window.open(Profile.profileInfo.instagram)}
          />
        </span>
        <span className="social-media-icon linkedin">
          <FaLinkedinIn
            size={16}
            onClick={() => window.open(Profile.profileInfo.linkedIn)}
          />
        </span>
        {darkTheme ? (
          <span className="dark-mode">
            <MdWbSunny size={16} onClick={darkMode} />
          </span>
        ) : (
          <span className="dark-mode">
            <BsMoon size={16} onClick={darkMode} />
          </span>
        )}
      </div>
    </div>
  );
}
