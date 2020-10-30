import React from "react";
import { Link } from "react-scroll";

import FloatingText from "../../Component/FloatingText/FloatingText";
import ChangingDiv from "../../Component/ChangingDiv/ChangingDiv";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.ChangingDiv}>
      <div className={classes.FloatingName}>
        <div className={classes.imageContainer}>
          <div
            className={classes.image}
            style={{ backgroundImage: `url("./images/profile/Kishor.webp")` }}
          ></div>
        </div>
        <div className={classes.FloatingName__title}>
          <h1>I am a</h1>
        </div>
        <FloatingText />

        <div className={classes.links}>
          <Link
            activeClass={classes.active}
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            PROJECTS
          </Link>
          <span> / </span>
          <Link
            activeClass={classes.active}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            ABOUT
          </Link>
          <span> / </span>
          <Link
            activeClass={classes.active}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            CONTACT
          </Link>
        </div>
      </div>
      <ChangingDiv />
    </div>
  );
};

export default Home;
