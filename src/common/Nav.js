import React, { useState } from "react";
import "./Nav.css";
import Home from "../assets/img/home.png";
import About from "../assets/img/about.png";
import Contact from "../assets/img/contact.png";
import Education from "../assets/img/education.png";
import Projects from "../assets/img/portfolio.png";
import Services from "../assets/img/services.png";
import Work from "../assets/img/work.png";
import Jsprojects from "../assets/img/jsprojects.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(!visible);
  return (
    <div>
      <div id="navigation">
        <ul>
          <Link to="/myportfolio" title="Home">
            <li data-aos="zoom-in">
              <img src={Home} alt="home" title="Home" />
            </li>
          </Link>
          <Link to="/about" title="About">
            <li data-aos="zoom-in">
              <img src={About} alt="about" />
            </li>
          </Link>
          <Link to="/services" title="Services">
            <li data-aos="zoom-in">
              <img src={Services} alt="services" />
            </li>
          </Link>
          <Link to="/work" title="Work">
            <li data-aos="zoom-in">
              <img src={Work} alt="work" />
            </li>
          </Link>
          <Link to="/education" title="Education">
            <li data-aos="zoom-in">
              <img src={Education} alt="education" />
            </li>
          </Link>
          {/* <Link to="/projects" title="Projects">
            <li data-aos="zoom-in">
              <img src={Jsprojects} alt="jsprojects" />
            </li>
          </Link> */}
          {/* <Link to="/portfolio" title="Portfolio">
            <li data-aos="zoom-in">
              <img src={Projects} alt="portfolio" />
            </li>
          </Link> */}
          <Link to="/contact" title="Contact">
            <li data-aos="zoom-in">
              <img src={Contact} alt="contact" />
            </li>
          </Link>
        </ul>
      </div>

      <div id="navigation-mob">
        <h1 data-aos="fade-in">
          <Link to="/myportfolio">Akash Tiwari</Link>
        </h1>
        <i
          data-aos="fade-in"
          className={visible ? "fa fa-close" : "fa fa-bars"}
          onClick={() => setVisible(!visible)}
        ></i>
        {visible ? (
          <ul
            className="list-unstyled"
            data-aos="slide-down"
            data-aos-duration="700"
          >
            <Link to="/myportfolio" onClick={handleClick}>
              <li>Home</li>
            </Link>
            <Link to="/about" onClick={handleClick}>
              <li>About</li>
            </Link>
            <Link to="/services" onClick={handleClick}>
              <li>What I Do</li>
            </Link>
            <Link to="/work" onClick={handleClick}>
              <li>Work</li>
            </Link>
            <Link to="/education" onClick={handleClick}>
              <li>Education</li>
            </Link>
            <Link to="/projects" onClick={handleClick}>
              <li>Projects</li>
            </Link>
            <Link to="/portfolio" onClick={handleClick}>
              <li>Portfolio</li>
            </Link>
            <Link to="/contact" onClick={handleClick}>
              <li>Contact</li>
            </Link>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;
