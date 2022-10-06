import React, { useEffect } from "react";
import { Link } from "react-scroll";

function Nav() {
  const slide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("ul");
    const links = document.querySelectorAll("li");
    const topNav = document.querySelector("nav");

    topNav.classList.toggle("fillColor");
    nav.classList.toggle("active-slider");
    burger.classList.toggle("toggle-links");

    links.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `linkFade .5s ease forwards ${
            index / 7 + 0.5
          }s`);
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const navDiv = document.querySelector("nav");
      const height = window.innerHeight;
      var scroll = window.scrollY;

      if (scroll > height - 80) {
        navDiv.classList.add("fullNav");
      } else {
        navDiv.classList.remove("fullNav");
      }
    });
  }, []);

  //

  return (
    <nav>
      <div className="logo">
        <h3>FIRST APP</h3>
      </div>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            onClick={slide}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="project" spy={true} smooth={true} onClick={slide}>
            Project
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} onClick={slide}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="burger" onClick={slide}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Nav;
