import React, { useState } from "react";
import { Link } from "react-scroll";

import NavBarIcon from "../NavBarIcon/NavBarIcon";
import classes from "./NavBar.module.css";

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  let navBarLinksClasses;

  if (showNav) {
    navBarLinksClasses = `${classes.NavBar__Links}`;
  } else {
    navBarLinksClasses = `${classes.NavBar__Links} ${classes.NavBar__Links_hide}`;
  }

  const showBackdropAccordingly = () => {
    if (showNav) {
      return (
        <div
          className={classes.backdrop}
          onClick={() => setShowNav(false)}
        ></div>
      );
    }
  };

  return (
    <div className={classes.NavBar}>
      {showBackdropAccordingly()}

      <div className={classes.NavBarIcon} onClick={() => setShowNav(true)}>
        <NavBarIcon />
      </div>

      <div className={classes.socialMedia}>
        <div className={classes.socialMedia__links}>
          <a
            href="https://github.com/KishorBudhathoki10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-github-plain"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/kishor-budhathoki-ba0bb3130/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
        </div>
      </div>

      <div className={navBarLinksClasses}>
        <div className={classes.container}>
          <Link
            activeClass={classes.active}
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setShowNav(false)}
          >
            Home
          </Link>

          <Link
            activeClass={classes.active}
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setShowNav(false)}
          >
            Projects
          </Link>

          <Link
            activeClass={classes.active}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setShowNav(false)}
          >
            About
          </Link>

          <Link
            activeClass={classes.active}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setShowNav(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
